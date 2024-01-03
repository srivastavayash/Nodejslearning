const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const obj = {
    users: [{
        fname: 'Yash',
        Lname: 'Srivastava'
    },
    {
        fname: 'Sanjay',
        Lname: 'Srivastava'
    },
    {
        fname: 'Sunita',
        Lname: 'Srivastava'
    },
    {
        fname: 'Shiwangi',
        Lname: 'Srivastava'
    }]
}
// console.log(obj);

app.get('/', (req, res) => {
    res.send('<strong>Working as expected, type /user in header to go to form...   </strong>');
});

app.get('/user', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/users', (req, res) => {
    console.clear();
    console.log('Ready');
    console.log(req.body);
    res.send(`Submitted Data: ${req.body.fname} ${req.body.lastName}`);
});

app.get('/users/:fname', (req, res) => {
    console.log(req.params);
    let resjson=[];
    if(obj.users.some((ele)=>ele.fname==req.params.fname)){
        resjson=obj.users.filter((ele)=>ele.fname==req.params.fname)
    }
    res.json(resjson);
}); 

app.delete('/users/:fname', (req, res) => {
    const fname = req.params.fname;
    console.log('Firstname:' + fname);
    res.send({ Status: 'Deleted', FirstName: fname });
});

app.put('/users/:fname', (req, res) => {
    const fname = req.params.fname;
    console.log('Firstname:' + fname);
    res.send({ status: 'Updated', FirstName: fname });
});

app.get('/test', (req, res) => {
    res.send('Testing server..');
});

app.listen(port, () => {
    console.log('Server running...')
});