var fs = require('fs');

var buffer = fs.readFile(process.argv[2], 'utf8',  function(err, str) {
	console.log(str.split('\n').length-1);
});
