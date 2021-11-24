var http = require('http');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World update!\n');
}).listen(1337,'192.168.5.128')
