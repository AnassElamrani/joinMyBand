const express = require("express");
const app = express();
const http = require("http").createServer(app);
const clientURL = "http://localhost:3000";

const io = require("socket.io")(http, {
  cors: {
    origin: clientURL,
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("join", (data) => {
    console.log("~~", data.room, socket.id);
    socket.join(data.room);
  });

  socket.on("text", (data) => {
    console.log("**", data);
    io.to(data.room).emit("message", { message: data.text, sender: data.from });
  });

  socket.on("leave", (data) => {
    socket.leave(data.room);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

http.listen(3300);
