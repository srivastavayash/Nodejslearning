const fs=require('fs');
const dir='./public';
console.clear();

// fs.readdir(dir,(err,files)=>{
//    console.log(files);
//    tempCounter=files.length+1;
//    newFilename=`new${tempCounter}.html`;
//    createNewFile(newFilename);
// })

// function createNewFile(newfilename){
//     const html=`<h1>Hello bro ${tempCounter}</h1>`;
//     fs.appendFile(dir+'/'+newfilename,html,(err)=>{
//         if(err) throw err;
//         console.log(`saved file ${newfilename}`);
//     })
// }
// createFile("Hello");
// function createFile(val){
// const html=`<h1> ${val} </h1>`;
// fs.writeFile(dir+'/Crtfile.html',html,(err)=>{
// if(err) throw err;
// console.log(`saved new file ${val}`);
// })
// } //used to create new file fs.writeFile overwrite the file if already exists.

// delFile(dir+'/Crtfile.html');
// function delFile(val){
//     fs.unlink(val,(err)=>{
//         if (err) throw err;
//         console.log(`File deleted ${val}`)
//     })
// }

// delAll();
// function delAll(){
// fs.readdir(dir,(err,files)=>{
//     if (err) throw err;
//     files.forEach((myFile)=>{
//         delFile(dir+'/'+myFile);
//     })
// })
  
// } //delete all files program.

// to rename a file use fs.rename(param1,param2)
// param1 old file name, param2: new file name, not any fixed position can be vice versa
