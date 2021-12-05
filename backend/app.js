const express = require('express')
const app = express();
const http = require('http').createServer(app);
var room = '';

const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
}
);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('join', (data) => {
    console.log('~~', data.room, socket.id);
    room = socket.room;
    socket.join(room);
  })
  

  socket.on('text', (data) =>  {
    console.log('**', data.text)
    io.to(room).emit("message", {message: data.text, sender: data.from})
  })
  
  socket.on('leave', (data) => {
    socket.leave(data.room);
  })
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

http.listen(3300);