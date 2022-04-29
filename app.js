const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
require('dotenv').config()



app.get('/',(req,res)=>{
    console.log("Hello from Project")         
    res.send("Hello from Project")
})


const port=process.env.PORT || 8001
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});