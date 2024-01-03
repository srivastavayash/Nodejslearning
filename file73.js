const express=require('express');
const app=express();
const port=3000;

//routing
app.get('/',(req,res)=>{
    res.send('<h1>Working fine...</h1>');
});

//regular expression
app.get(/z/,(req,res)=>{
res.send('Checking regular expression...');
});

//pattern checking
app.get('/ab*cd',(req,res)=>{
    res.send(req.path);
});

app.get('/ab+de',(req,res)=>{
    res.send(req.path);
});

app.listen(port,()=>{
    console.log('Chal rha hai server..');
});