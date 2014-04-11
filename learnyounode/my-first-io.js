var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
var parts = str.split('\n');
console.log(parts.length-1);
