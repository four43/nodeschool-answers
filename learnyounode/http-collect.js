var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.pipe(bl(function (err, data) {
        var responseText = data.toString();
        console.log(responseText.length);
        console.log(responseText);
    }));
});