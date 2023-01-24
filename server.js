#!/usr/bin/node
const { v4: uuidv4 } = require("uuid");
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const User = require("./models/user");
const cors = require('cors');
const path = require('path');
const express = require('express');
const app = express();
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
const hbs = require('hbs');
const { Router } = express;
const storage = require('./storage/db_storage');

const login = Router();
const chat = Router();
const singup = Router();

app.use(session({ secret: uuidv4(), cookie: { maxAge: 60000 }}));
app.use(flash());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/login', login);
app.use('/chat', chat);
app.use('/singup', singup)
app.use('/static/', express.static(__dirname + '/public'))
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/public/views/'));
app.use(cors({origin: "*"}));

httpServer.listen(2000, () => {
    console.log("server started in: ", httpServer.address());
});

io.on("connection", (socket) => {
    console.log("New Client Connected");
});

app.get('/users', (req, res) => {
    const query = "SELECT * from users";
    storage.connection.query(query, (err, result, fields) => {
        if(err) {
            console.log(err);
            return;
        }
        let list = [];
        for (const user of result) {
            list.push(user);
        }

        res.json(list);
    });
});

app.post('/usercreate', (req, res) => {

    const UName = req.body.UName;
    const query = "SELECT * from users";
    storage.connection.query(query, (err, result, fields) => {
        if(err) {
            console.log(err);
            return;
        }
        for (const user of result) {
            if (user.name === UName) {
                res.send({ status: "failed" });
                return;
            };
        };
        const user1 = new User(UName);
        storage.new(user1, "user");
        res.send({ status: "success", user: {name: user1.name, created_at: user1.createdAt}});
    });


});

app.post('/login', (req, res) => {

    const UName = req.body.UName;
    const query = "SELECT * from users";
    storage.connection.query(query, (err, result, fields) => {
        if(err) {
            console.log(err);
            return;
        }
        for (const user of result) {
            if (user.name === UName) {
                req.session.user = { name: UName};

                res.send({ status: "success"});
                return;
            };
        };

        res.send({ status: "failed" });
     });


});

app.get("/", (req, res) => {
    res.redirect('login')
});

login.get("/", (req, res) => {
    res.render('login')
});

singup.get("/", (req, res) => {
    res.render("singup", {})
});

chat.get("/", (req, res) => {
    const user = req.session.user;
    res.render("chat", {})

});

