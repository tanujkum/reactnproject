const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors({
    origin:'*'
}));

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: "Td@apasteron!9713#6842",
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

app.listen(8000, () => {
    console.log("kilimanjaro");
});