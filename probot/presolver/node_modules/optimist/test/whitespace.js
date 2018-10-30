var optimist = require('../');
var test = require('tap').test;

test('whitespace should be whitespace' , function (t) {
    t.plan(1);
    var x = optimist.parse([ '-x', '\t' ]).x;
    t.equal(x, '\t');
});
