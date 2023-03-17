const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url=='/'){
        res.write('<html><head><title>Form</title></head>');
        res.write('<body><form method="post" action="/process"><input name="message"/></form></body>');
        res.end();
    }else if(req.url=='/process' && req.method == 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        req.on('end',(chunk)=>{
            console.log('stream finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        res.write('Thank you for submitting');
        res.end();
    }else{
        res.write('URL not found! ');
        res.end();
    }
});

server.listen(3030);
console.log('Listener on port 3030');

//hello world how are you
console.log();