// path module
const path = require('path');
// os module
const os = require('os');
//file system module
const fs = require('fs');


// const myPath = 'D:/Web Development/Node Js/basic/nodeJs/promise.js';
// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));

// //os
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.cpus());

//file system module fs
fs.writeFileSync('myfile.txt', 'Hello programmers');
const data = fs.readFileSync('myfile.txt');
console.log(data.toString())