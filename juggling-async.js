#!/usr/bin/node
var http = require('http');
var bl = require('bl');

var responseContents = {};
var urls = process.argv.slice(2);


urls.forEach(function(url) {
    http.get(url, function(response) {
        response.pipe(bl(function (err, data) {
            var dataString = data.toString();
            responseContents[url] = dataString;
            checkDone();
        }));
    });
});

function checkDone() {
    if (Object.keys(responseContents).length == urls.length) {
        urls.forEach(function(url) {
            console.log(responseContents[url]);
        });
    }
}