const http = require('http');
const myJson = require('./Json');

http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.write(JSON.stringify(myJson));
    res.end();
}).listen(3000);
console.log('Server started...');
