const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

app.get("/home", (req, res) => {
    res.sendFile("Home Page");
})

app.listen(3000, function () {
    console.log('listening on port 3000');
})
