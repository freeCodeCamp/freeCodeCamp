var test = require('tape');
var parse = require('../');

test('boolean default true', function (t) {
    var argv = parse([], {
        boolean: 'sometrue',
        default: { sometrue: true }
    });
    t.equal(argv.sometrue, true);
    t.end();
});

test('boolean default false', function (t) {
    var argv = parse([], {
        boolean: 'somefalse',
        default: { somefalse: false }
    });
    t.equal(argv.somefalse, false);
    t.end();
});
