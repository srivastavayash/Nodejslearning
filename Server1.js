const fs= require('fs');
const http=require('http');
const dir='./public'
const file='new4.html'
const url=`${dir}/${file}`;
console.log(url);

http.createServer((req,res)=>{
    fs.readFile(url,(err,html)=>{
        res.writeHead(200,{
            'Content-Type':'text/html'
        });
        // console.log(html);
        res.write(html);
        return res.end();
    })
    console.log('Server Initiated...')
}).listen(3000);

fs.stat(url,(err,stats)=>{
    if (err) throw err;
    console.log(stats.isFile());
    console.log(stats.mtime);
})