var q = require('q');
var defer = q.defer();
defer.promise.then(function (data) {
        console.log(data);
    },
    function (data) {
        console.log(data);
    })
//defer.promise is the actual promise itself
//defer.promise.then is the "Q" way of attaching a then handler
setTimeout(function () {
    defer.reject('REJECTED!');
}, 300);