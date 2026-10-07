'use strict';

var test = require('tape');
var stringify = require('../');

test('custom comparison function', function (t) {
    t.plan(1);
    var obj = { c: 8, b: [{z:6,y:5,x:4},7], a: 3 };
    var s = stringify(obj, function (a, b) {
        return a.key < b.key ? 1 : -1;
    });
    t.equal(s, '{"c":8,"b":[{"z":6,"y":5,"x":4},7],"a":3}');
});
