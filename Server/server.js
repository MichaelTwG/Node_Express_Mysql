const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);


app.set('port', process.env.PORT || 8000)

require('./sockets')(io)

// Le paso el html
app.use(express.static(path.join(__dirname + "public")));

// Iniciando el server
server.listen(app.get('port'), () => {
  console.log("Server Inicializado en el " ,app.get('port'));
});
