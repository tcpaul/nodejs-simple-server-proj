import * as http from 'http';

const server = http.createServer((req,res) => {
    res.writeHead(200, { 'content-type': 'text/plain'});
    res.end('Hola');
});

server.listen(8002);
