var parse = require('../');
var test = require('tape');

test('nums', function (t) {
    var argv = parse([
        '-x', '1234',
        '-y', '5.67',
        '-z', '1e7',
        '-w', '10f',
        '--hex', '0xdeadbeef',
        '789'
    ]);
    t.deepEqual(argv, {
        x : 1234,
        y : 5.67,
        z : 1e7,
        w : '10f',
        hex : 0xdeadbeef,
        _ : [ 789 ]
    });
    t.deepEqual(typeof argv.x, 'number');
    t.deepEqual(typeof argv.y, 'number');
    t.deepEqual(typeof argv.z, 'number');
    t.deepEqual(typeof argv.w, 'string');
    t.deepEqual(typeof argv.hex, 'number');
    t.deepEqual(typeof argv._[0], 'number');
    t.end();
});

test('already a number', function (t) {
    var argv = parse([ '-x', 1234, 789 ]);
    t.deepEqual(argv, { x : 1234, _ : [ 789 ] });
    t.deepEqual(typeof argv.x, 'number');
    t.deepEqual(typeof argv._[0], 'number');
    t.end();
});
