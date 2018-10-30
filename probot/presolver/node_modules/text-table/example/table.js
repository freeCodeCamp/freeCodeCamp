var table = require('../');
var t = table([
    [ 'master', '0123456789abcdef' ],
    [ 'staging', 'fedcba9876543210' ]
]);
console.log(t);
