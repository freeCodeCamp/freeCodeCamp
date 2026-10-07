var test = require('tape');
var inspect = require('../');

var obj = { a: 1, b: [3, 4, undefined, null], c: undefined, d: null };

test('undef and null', function (t) {
    t.plan(1);
    t.equal(
        inspect(obj),
        '{ a: 1, b: [ 3, 4, undefined, null ], c: undefined, d: null }'
    );
});
