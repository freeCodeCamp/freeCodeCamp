var inspect = require('../');
var test = require('tape');

test('circular', function (t) {
    t.plan(2);
    var obj = { a: 1, b: [3, 4] };
    obj.c = obj;
    t.equal(inspect(obj), '{ a: 1, b: [ 3, 4 ], c: [Circular] }');

    var double = {};
    double.a = [double];
    double.b = {};
    double.b.inner = double.b;
    double.b.obj = double;
    t.equal(inspect(double), '{ a: [ [Circular] ], b: { inner: [Circular], obj: [Circular] } }');
});
