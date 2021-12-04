const express = require('express')
const app = express();
const http = require('http').createServer(app);


const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
}
);

io.on("connection", socket => {
    // either with send()
    socket.send("Hello!");
  });

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

http.listen(3300)