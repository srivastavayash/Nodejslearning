const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Working amazing!');
});

//Routing parameter:
app.get('/users/:id/:val', (req, res, next) => {
    res.send(req.params);
    console.log(req.params.id);
    next()
}, (req, res) => {
    console.log(req.params.val);
});
//Multiple callback functions: next() function inside the route or middleware helps to run the next request.

app.listen(port, () => {
    console.log('server running ...');
});