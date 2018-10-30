var test = require('tape');
var table = require('../');

test('dot align', function (t) {
    t.plan(1);
    var s = table([
        [ '0.1.2' ],
        [ '11.22.33' ],
        [ '5.6.7' ],
        [ '1.22222' ],
        [ '12345.' ],
        [ '5555.' ],
        [ '123' ]
    ], { align: [ '.' ] });
    t.equal(s, [
        '  0.1.2',
        '11.22.33',
        '  5.6.7',
        '    1.22222',
        '12345.',
        ' 5555.',
        '  123'
    ].join('\n'));
});
