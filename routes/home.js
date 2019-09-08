const express = require("express");
const home = express.Router(); //creating routing in different file

home.get('/', (req, res) => {
    res.send("Hello World");
});

module.exports = home;