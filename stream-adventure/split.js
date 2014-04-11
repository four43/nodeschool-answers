var through = require('through');
var split = require('split');

var evenLine = false;
process.stdin
    .pipe(split())
    .pipe(through(function (line) {
        var dataStr = line.toString();
        if(evenLine) {
            dataStr = dataStr.toUpperCase();
        }
        else {
            dataStr  = dataStr.toLowerCase();
        }
        this.queue(dataStr+"\n");
        evenLine = !evenLine;
    }))
    .pipe(process.stdout);