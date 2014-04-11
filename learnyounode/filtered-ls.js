#!/usr/bin/node
var fs = require('fs');

var buffer = fs.readdir(process.argv[2], function(err, files) {
	for(var i in files) {
		var regex = new RegExp('\.'+process.argv[3]+'$');
		if(files[i].match(regex)) {
			console.log(files[i]);
		}
	}
});
