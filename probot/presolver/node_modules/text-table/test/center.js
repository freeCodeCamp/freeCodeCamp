var test = require('tape');
var table = require('../');

test('center', function (t) {
    t.plan(1);
    var s = table([
        [ 'beep', '1024', 'xyz' ],
        [ 'boop', '3388450', 'tuv' ],
        [ 'foo', '10106', 'qrstuv' ],
        [ 'bar', '45', 'lmno' ]
    ], { align: [ 'l', 'c', 'l' ] });
    t.equal(s, [
        'beep    1024   xyz',
        'boop  3388450  tuv',
        'foo    10106   qrstuv',
        'bar      45    lmno'
    ].join('\n'));
});
