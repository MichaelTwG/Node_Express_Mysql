#!/usr/bin/node
const storage = require("../storage/db_storage");
const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors({origin: "*"}));

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

const port = 3000;
app.listen(port, () => {
    console.log("Listening in port ", port)
});
