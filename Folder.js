const fs=require('fs');
const folderName='public1';
console.clear();
try{
    if(!fs.existsSync(folderName)){
        fs.mkdirSync(folderName);
        console.log('Folder Created...');
    }
    else{
        console.log('Folder Already Exists...');
    }
    
}
catch(err){
    console.log(err);
}
const folderPath=`./${folderName}`;
const fileName=`/index.html`;
try{
if(!fs.existsSync(folderPath+fileName)){  
fs.writeFile(folderPath+fileName,'<h1>Hello, Brother! <br> Mr. Yash Srivastava!</br></h1>',(err)=>{
    if(err) throw err;
    console.log('File created...');
})}
else{
    console.log('File already exist..');
}
}
catch(err){
    console.log(err);
} 
let val1=fs.readdirSync(folderPath);
console.log(val1);