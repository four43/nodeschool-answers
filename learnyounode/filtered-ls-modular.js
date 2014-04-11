var ls = require('./ls-module');

ls(process.argv[2], process.argv[3], function(err, files) {
    if(err) {
        console.log('Error fetching: '+err);
        return false;
    }
    for(var i in files) {
        console.log(files[i]);
    }
});