const fs = require('fs');
const { chunk } = require('lodash');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createReadStream(`${__dirname}/output.txt`);

ourReadStream.on('data', (chunk)=>{
    ourWriteStream.write(chunk);
})