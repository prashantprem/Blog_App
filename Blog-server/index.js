const  express = require("express");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Mongodb connected");
});

const app = express();
const port = process.env.port || 5000;
app.route("/").get((req, res) => res.json("Your first rest api "));
app.listen(5000,() => console.log(`your server is runing on port ${port}`));