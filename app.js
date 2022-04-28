const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const dotenv=require("dotenv");
require('dotenv').config()

app.use(cors({
    origin:'*'
}));
console.log(process.env.PASSWORD)
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: process.env.PASSWORD,
    insecureAuth : true,
    database:'reactn'
});
app.get('/',(req,res)=>{
    console.log("Hello from Project")         
    res.send("Hello from Project")
})
app.get('/gettingdata',(req,res)=>{
    con.connect(function(err) {
    if (err) throw err;
        con.query("SELECT * FROM userdata", function (err, result) {
        if (err) throw err;
        else{
            res.send(result)
        }    
        });
    });
})

const port=process.env.PORT || 8001
app.listen(port, () => {
    console.log("kilimanjaro");
});