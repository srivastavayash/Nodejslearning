const fs =require('fs');
const fileName='test.txt';
function writeme(data){
    fs.appendFile('./test.txt',`\n${data}`,(err)=>{
        if (err) throw err;
        console.log(`Color Added ${data}...`);
    })
}
const arr=['red','blue','green'];
arr.forEach((ele)=>{
    writeme(ele);
})
 const data=fs.readFileSync(fileName,'utf-8');
 console.log(data);