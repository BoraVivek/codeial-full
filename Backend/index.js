const express = require("express");
require('dotenv').config();

const port = process.env.PORT;
const app = express();

const db = require("./config/mongoose");


app.get("/", function(req, res){
    return res.send("Hello from Index");
})

app.listen(port, function(err){
    if(err){
        return console.log("Error in running website");
    }

    console.log("Server is up and running at port: ", port);
})
