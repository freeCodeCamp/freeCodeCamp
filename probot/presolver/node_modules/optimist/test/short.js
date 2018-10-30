var optimist = require('../index');
var test = require('tap').test;

test('-n123', function (t) {
    t.plan(1);
    var parse = optimist.parse([ '-n123' ]);
    t.equal(parse.n, 123);
});

test('-123', function (t) {
    t.plan(3);
    var parse = optimist.parse([ '-123', '456' ]);
    t.equal(parse['1'], true);
    t.equal(parse['2'], true);
    t.equal(parse['3'], 456);
});
