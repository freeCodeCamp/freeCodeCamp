var inspect = require('../');
var test = require('tape');

test('deep', function (t) {
    t.plan(4);
    var obj = [[[[[[500]]]]]];
    t.equal(inspect(obj), '[ [ [ [ [ [Array] ] ] ] ] ]');
    t.equal(inspect(obj, { depth: 4 }), '[ [ [ [ [Array] ] ] ] ]');
    t.equal(inspect(obj, { depth: 2 }), '[ [ [Array] ] ]');

    t.equal(inspect([[[{ a: 1 }]]], { depth: 3 }), '[ [ [ [Object] ] ] ]');
});
