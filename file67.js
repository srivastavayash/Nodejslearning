const fetch = require('node-fetch');
console.clear();
// fetch('https://randomuser.me/api/?results=5').then(res => res.json()).then(json => {
//     json.results.forEach(person => {
//        const val=person.name;
//        console.log(`${val.first} ${val.last}`);
//     });
// }); //this api generate random names 
const lodash=require('lodash');
const ran=lodash.random(100);
lodash.times(10,()=>{
    console.log(lodash.random(100));
}); //lodash times function is udes to print the number n times.
//lodash is the utility library used in javascript to deal with array,objects and strings.
