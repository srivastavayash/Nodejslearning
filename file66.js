const path = require('path');
const fileName = 'new.html';
const dir='public1';
console.clear();
const url=path.join('/','.',dir,fileName);
console.log(url);
console.log(path.dirname(url)); //gives directory/folder name
console.log(path.extname(url)); //gives extension name 
console.log(path.basename(url)); //gives filename
console.log(path.resolve(url)); //gives full pathName