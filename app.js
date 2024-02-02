const express = require("express");
const mysql = require("mysql")

const app = express();

const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'usbw',
        database: 'db_sidequest'
    })

app.get ("/", (req, res) =>{
    res.send("<h1> home page</h1>")
});

app.listen(5000, () => {
    console.log("Server started na porta 5000")
});