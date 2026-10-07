var test = require('tape');
var table = require('../');

test('dot align', function (t) {
    t.plan(1);
    var s = table([
        [ 'beep', '1024' ],
        [ 'boop', '334.212' ],
        [ 'foo', '1006' ],
        [ 'bar', '45.6' ],
        [ 'baz', '123.' ]
    ], { align: [ 'l', '.' ] });
    t.equal(s, [
        'beep  1024',
        'boop   334.212',
        'foo   1006',
        'bar     45.6',
        'baz    123.'
    ].join('\n'));
});
