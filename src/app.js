require("dotenv").config()
const express = require("express");
const apiV1 = require("./api/v1/api");
const db = require("./models");

const app = express();

db.sequelize.sync({force: true}).then(() => {
    console.log("Droped table and re-sync");
});
app.use('/api/v1', apiV1);

app.listen(process.env.DR_NODE_PORT, function() {
    console.log(`Server Started on port : ${process.env.DR_NODE_PORT}`);
})