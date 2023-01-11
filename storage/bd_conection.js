const mysql = require('mysql');

const conection = mysql.createConnection({
    host : 'localhost',
    database : 'DiscordTrucho',
    user : 'dev',
    password : 'devpass'
});


conection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Conection Success!");
    };
});

module.exports = conection;