#!/usr/bin/node
const mysql = require("mysql");

class Storage {
    constructor (connection) {
        this.connection = connection;
    }

    new(obj, table) {
        if (table === "user") {
            const query = `INSERT INTO users (id, name) VALUES ("${obj.id}", "${obj.name}");`;
        } else if (table === "msg") {
            const query = `INSERT INTO msgs (sen, rec, txt) VALUES ("${obj.sen}", "${obj.rec}", "${obj.txt}");`
        }

        this.connection.query(query, (err, res, fields) => {
            if (err) {
                console.log(err);
            }
        })
    }
};


const connection = mysql.createConnection ({
    host : 'localhost',
    database : 'DiscordTrucho_v2',
    user : 'root',
    password : 'root'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Conection Success! \n");
    };
});

st = new Storage(connection);

module.exports = st;
