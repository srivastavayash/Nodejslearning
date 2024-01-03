// const str="Hello bhai";
// const buffer=Buffer.from(str,"utf-8");
// console.log(buffer);
// const val=buffer.slice(0,5);
// console.log(val.toString());
// //buffer is a memory inside disk where the value is stored for the vARIABLE.
// //we can perform various function on the buffer to modify the value accordingly.

//try-catch error

const fs = require('fs');
const dir = 'public'

fs.readdir(dir, (err, files) => {
    if (err) throw err;
    // console.log(files);
});

try{
    console.log('hello');
}
catch(err){
    console.log('No error')
}
//try-catch statements udes to handle the error which might appear unexpectedly, be prepared.