const express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello Everyone</h1>");
});

app.listen(3000, () => {
    console.log("Server is running");
});