const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fileName="index.html"
const dir='public1';
const url = path.join(__dirname, dir);

app.use((req,res,next)=>{
    if(req.path==='/'){
        res.sendFile(path.join(url,fileName));
    }
    else{
        next();
    }
});//here it is checking the filename and routing path if it matching the path then the default path is provided else middleware uses the new file attached to root directory and provide the rendering.

app.use(express.static(url)); //middleware: it works in between the req and res and change the file according to the needs.

app.get('/test', (req, res) => {
    res.send('<h1>Naya server page reloded</h1>');
});

app.listen(port, () => {
    console.log('Chal gya bhai...')
});