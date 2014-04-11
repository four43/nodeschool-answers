var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    if (req.method == 'GET') {
        var urlParts = url.parse(req.url, true);
        var routeMatch = urlParts.pathname.toLowerCase().match(/\/api\/(parsetime|unixtime)/);
        if (routeMatch.length) {
            //We have route matches, continue.
            if (urlParts.query.iso !== undefined) {
                var date = new Date(urlParts.query.iso);
                var dateContent = {};
                switch (routeMatch[1]) {
                    case "parsetime" :
                        dateContent = parseDateParts(date);
                        break;
                    case "unixtime" :
                        dateContent = parseUnixtime(date);
                        break;
                    default:
                        res.writeHead(404);
                        res.end();
                        return;
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(dateContent));
            }
            else {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({error: {"iso": "This value is required and cannot be empty."}}));
            }


        }
        else if (urlParts.pathname.toLowerCase() === "/api/unixtime") {

        }
        else {
            res.writeHead(404);
            res.end();
        }
    }
    else {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({error: "This endpoint supports GET type requests."}));
    }
});

function parseDateParts(date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}

function parseUnixtime(date) {
    return {
        unixtime: date.getTime()
    };
}

server.on('error', function (error, socket) {
    if (error.errno === 'EADDRINUSE') {
        console.log("Couldn't start server on " + process.argv[2]);
    }
    else {
        console.log("Uncaught error: " + error.errno);
    }
});

server.listen(process.argv[2]);