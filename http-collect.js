#!/usr/bin/node
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response) {
    response.pipe(bl(function(err, data) {
       var dataString = data.toString();
       console.log(dataString.length);
       console.log(dataString);
    }));
});