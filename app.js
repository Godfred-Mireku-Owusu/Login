const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('public'));

app.get("/" , (req,res)=>{
  res.sendFile(__dirname + "/index.html");
})

app.post("/success" , (req , res)=>{
    res.sendFile(__dirname + "/success.html");
})

app.listen(port, ()=>{
  console.log(`port is listen at port ${port}`);
})
