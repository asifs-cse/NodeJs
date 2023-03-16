// path module
const path = require('path');
// os module
const os = require('os');

const myPath = 'D:/Web Development/Node Js/basic/nodeJs/promise.js';
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));

//os