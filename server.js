const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Listening at port ${port}.`);
});

app.use(express.static(path.join(__dirname,'dist')));

app.get('/', (res,req) => {
  res.sendFile('./dist/index.html');
})

io.on('connection', (socket) => {
  socket.on('new message', (data)  => {
    io.emit('new message', {
      sender: socket.sender,
      message: data.message
    });
  });

  socket.on('add user', (sender) => {
    socket.sender = sender;
  });
});
