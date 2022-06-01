const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
require('dotenv').config()

app.use(cors({
    origin:'*'
}));

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: `Td@apasteron!9713#6842`,
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
app.get('/gettingdata1',(req,res)=>{
    let a=
        [
            {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
            },
            {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false
            },
            {
            userId: 1,
            id: 3,
            title: "fugiat veniam minus",
            completed: false
            },
            {
            userId: 1,
            id: 4,
            title: "et porro tempora",
            completed: true
            },
            {
            userId: 1,
            id: 5,
            title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
            completed: false
            },
            {
            userId: 1,
            id: 6,
            title: "qui ullam ratione quibusdam voluptatem quia omnis",
            completed: false
            },
            {
            userId: 1,
            id: 7,
            title: "illo expedita consequatur quia in",
            completed: false
            },
            {
            userId: 1,
            id: 8,
            title: "quo adipisci enim quam ut ab",
            completed: true
            },
            {
            userId: 1,
            id: 9,
            title: "molestiae perspiciatis ipsa",
            completed: false
            },
            {
            userId: 1,
            id: 10,
            title: "illo est ratione doloremque quia maiores aut",
            completed: true
            }
        ]
    console.log(a)
    res.send(a)
})

const port=8000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});