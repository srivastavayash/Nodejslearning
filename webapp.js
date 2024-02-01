const express=require('express');
const  app=express();
const port=3000;
const users=require('./user');

app.use('/users',users);

//here the endpoints are same still we are using every url again. We can solve this issue using app.router().
// app.get('/',(req,res)=>{
//     res.send('Running...')
// })
// app.get('/users',(req,res)=>{
//     res.send('Testing..')
// })
// app.post('/users',(req,res)=>{
//     res.send('checked again!')
// })

//here we are using app.route to simplify the code.
// app.get('/',(req,res)=>{
//     res.send('Running...')
// })
// app.route('/users')
// .get((req,res)=>
//     res.send('Testing..')
// )
// .post((req,res)=>
//     res.send('checked again!')
// )

app.listen(port,()=>{
    console.log('Server is running...')
});