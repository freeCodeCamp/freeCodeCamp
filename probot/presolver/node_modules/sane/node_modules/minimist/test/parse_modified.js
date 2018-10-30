var parse = require('../');
var test = require('tape');

test('parse with modifier functions' , function (t) {
    t.plan(1);
    
    var argv = parse([ '-b', '123' ], { boolean: 'b' });
    t.deepEqual(argv, { b: true, _: [123] });
});
