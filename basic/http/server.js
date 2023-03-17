const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url=='/'){
        res.write('Hello world');
        res.write(' How abou you?');
    }else if(req.url=='/about'){
        res.write('Welcome to about page');
    }else{
        res.write('URL not found!');
        res.end();
    }
}) 

server.listen(3000);
console.log('Listening on port 3000');