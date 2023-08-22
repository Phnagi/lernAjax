const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine" , "ejs");

app.get("/",(req,res) => {
    res.render("test1");
});

app.listen(3000,() => {
    console.log("3000伺服器正在執行");
});