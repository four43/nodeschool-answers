var http = require('http');

var server = http.createServer(function(req, res) {
    if(req.method === 'POST') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        req.setEncoding('utf8');
        req.on('data', function(chunk) {
           res.write(chunk.toUpperCase());
        });
        req.on('end', function() {
            res.end();
        });
    }
    else {
        res.end("This endpoint supports POST type requests.");
    }
});

server.on('error', function(error, socket) {
    if(error.errno === 'EADDRINUSE') {
        console.log("Couldn't start server on "+process.argv[2]);
    }
    else {
        console.log("Uncaught error: "+error.errno);
    }
});

server.listen(process.argv[2]);