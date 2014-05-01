#!/usr/bin/node
var express = require('express'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded());

app.post('/form', function(req, res) {
    for(var i in req.body) {
        res.end(req.body[i].split('').reverse().join(''));
    };
});

app.listen(process.argv[2]);
