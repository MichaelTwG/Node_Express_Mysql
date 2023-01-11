#!/usr/bin/node
const User = require("./user");
const Msg = require("./message");
const conection = require("./storage/bd_conection");
const readline = require("readline");

Micha = new User("Micha","micha@gmail.sexo","12345");
Dami = new User("Dami","dami@gmail.sexo","12345");

// Guardar en DB
// const query = `INSERT INTO users (id, uname, email, pass, created_at) VALUES("${Micha.id}", "${Micha.userName}", "${Micha.email}", "${Micha.password}", "${Micha.created_at}"), ("${Dami.id}", "${Dami.userName}", "${Dami.email}", "${Dami.password}", "${Dami.created_at}");`;

// conection.query(query, (err, res, fields) => {
//     if (err) {
//         console.log(err);
//     }
// });

// Traer de DB

// const query = `SELECT * FROM users;`;

// conection.query(query, (err, res, fields) => {
//     if (err) {
//         console.log(err);
//     } else {
//         for (const user of res) {
//             console.log(user.uname);
//         }
//     }
// });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let num = 0;

  rl.prompt();
  
  rl.on('line', (line) => {

    if (line === "exit") {
        rl.close();
    }

    if (num === 0) {
        msg1 = new Msg(Micha.id, Dami.id, line);
        console.log(Micha.userName, ": " + line);
        num = 1;
    } else {
        msg1 = new Msg(Dami.id, Micha.id, line);
        console.log(Dami.userName, ": " + line);
        num = 0;
    };

    const query = `INSERT INTO messages (sender_id, receiver, message) VALUES("${msg1.sender}", "${msg1.receiver}", "${msg1.message}");`;

    conection.query(query, (err, res, fields) => {
        if (err) {
            console.log(err);
        }
    });

    rl.prompt();
  });
