const express = require("express");
const app = express();
const port = 3000;

// home route
app.get("/",(req,res)=>{
    res.send(" Welcome to DevOps Project Series - Docker + Jenkins CI Pipeline");
});

// health cheack route
app.get("/health",(req,res)=>{
res.json({
    status: "up",
    message: "Application is running successfully"
});
});

// aboute route
app.get("/about",(req,res)=>{
    res.send("This project demonstrates Docker + jenkins CI pipeline");
});

// start server
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});