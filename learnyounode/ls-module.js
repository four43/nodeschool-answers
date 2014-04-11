var fs = require('fs');

module.exports = function(directory, extension, callback) {
    fs.readdir(directory, function(err, files) {
        if(err) {
            callback(err, null);
            return;
        }
        var matchedFiles = [];
        for(var i in files) {
            var regex = new RegExp('\.'+extension+'$');
            if(files[i].match(regex)) {
                matchedFiles.push(files[i]);
            }
        }
        callback(null, matchedFiles);
        return;
    });
}