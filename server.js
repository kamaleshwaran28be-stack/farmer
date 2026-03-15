const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kamalesh57#@",
    database: "farmer_profit"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected");
});

app.post("/save", (req, res) => {

    const {crop_name, cost, selling_price, profit} = req.body;

    const sql = "INSERT INTO profits (crop_name,cost,selling_price,profit) VALUES (?,?,?,?)";

    db.query(sql,[crop_name,cost,selling_price,profit], (err,result)=>{
        if(err) throw err;

        res.send("Data Saved");
    });
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});