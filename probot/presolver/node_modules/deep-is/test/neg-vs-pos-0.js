var test = require('tape');
var equal = require('../');

test('0 values', function (t) {
    t.ok(equal( 0,  0), ' 0 ===  0');
    t.ok(equal( 0, +0), ' 0 === +0');
    t.ok(equal(+0, +0), '+0 === +0');
    t.ok(equal(-0, -0), '-0 === -0');

    t.notOk(equal(-0,  0), '-0 !==  0');
    t.notOk(equal(-0, +0), '-0 !== +0');

    t.end();
});

