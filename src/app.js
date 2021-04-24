const express = require("express");
const app = express();
require("dotenv").config()

app.listen(process.env.DR_NODE_PORT, function() {
    console.log(`Server Started on port : ${process.env.DR_NODE_PORT}`);
})