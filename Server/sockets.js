module.exports = function (io) {
    io.on('connection', (socket) => {
        socket.on('chat message', msg => {
          io.emit('chat message', msg);
        });
      });
}
