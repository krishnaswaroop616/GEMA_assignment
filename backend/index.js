const express=require("express");
const cors=require("cors");
const data=require("./data");

const app=express();
app.use(cors());

const PORT=8080;

app.get("/report",(req,res)=>{
    res.json(data);
});

app.listen(PORT,()=>{
    console.log("Server running");
});



