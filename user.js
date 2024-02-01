const express=require('express');
const app=express();
const router=express.Router();
router.use((req,res,next)=>{
    console.log('use middleware');
    next()
})

router.get('/',(req,res)=>{
    res.send('main user')
})

router.get('/info',(req,res)=>{
    res.send('User info');
})
module.exports=router;