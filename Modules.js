const http=require('http');
// console.log(http);

http.createServer((req,res)=>{
res.writeHead(200,{'content-type':'text/html'});
if(req.url=='/'){
res.write('Hello World !')}
else if(req.url=='/test'){
    res.write('Test Page');
}
else{
    res.write('NO PAGE FOUND !!')
}
// res.write(`<br> URL ${req.url}`);
res.end();
}).listen(3000);