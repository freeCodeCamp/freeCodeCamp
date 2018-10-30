var table = require('../');
var t = table([
    [ 'beep', '1024', 'xyz' ],
    [ 'boop', '3388450', 'tuv' ],
    [ 'foo', '10106', 'qrstuv' ],
    [ 'bar', '45', 'lmno' ]
], { align: [ 'l', 'c', 'l' ] });
console.log(t);
