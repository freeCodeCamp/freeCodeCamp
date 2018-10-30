var optimist = require('../');
var test = require('tap').test;

test('parse with modifier functions' , function (t) {
    t.plan(1);
    
    var argv = optimist().boolean('b').parse([ '-b', '123' ]);
    t.deepEqual(fix(argv), { b: true, _: ['123'] });
});

function fix (obj) {
    delete obj.$0;
    return obj;
}
