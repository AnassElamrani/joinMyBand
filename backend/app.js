const express = require('express');
const app = express();
const bodyParser = require("body-parser")

const hostname = 'localhost';
const port = 3300;


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`)
})