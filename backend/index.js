const express =require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.get("/",(req,res)=>{
    console.log("ShopNest Backend is Working Properly")
});

app.listen(5000,()=>{
    console.log("server started")
})
