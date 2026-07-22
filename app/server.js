const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DevOps CI Pipeline</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,Helvetica,sans-serif;
}

body{
    background:linear-gradient(135deg,#0f172a,#1e293b);
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.container{
    text-align:center;
    background:#ffffff10;
    padding:50px;
    border-radius:20px;
    backdrop-filter:blur(10px);
    box-shadow:0 0 25px rgba(0,0,0,.4);
    max-width:700px;
}

h1{
    font-size:42px;
    color:#38bdf8;
    margin-bottom:20px;
}

p{
    font-size:20px;
    margin-bottom:15px;
}

.status{
    display:inline-block;
    margin-top:20px;
    padding:12px 25px;
    background:#22c55e;
    border-radius:30px;
    font-weight:bold;
}

.footer{
    margin-top:30px;
    font-size:14px;
    color:#cbd5e1;
}
</style>

</head>

<body>

<div class="container">

<h1>🚀 Docker + Jenkins CI Pipeline</h1>

<p>Welcome to the DevOps Project Series</p>

<p>This application is automatically built and deployed using Jenkins.</p>

<div class="status">
✅ Deployment Successful
</div>

<div class="footer">
Git • GitHub • Docker • Jenkins • Node.js • Express
</div>

</div>

</body>
</html>
`);
});

app.get("/health",(req,res)=>{
    res.json({
        status:"UP",
        message:"Application is running successfully"
    });
});

app.listen(PORT,()=>{
    console.log("Server running on http://localhost:3000");
});