var through = require('through');
var tr = through(write, write);

process.stdin.pipe(tr).pipe(process.stdout);

function write(data) {
    this.queue(data.toString().toUpperCase());
}