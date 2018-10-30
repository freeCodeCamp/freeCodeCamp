var test = require('tape');
var equal = require('../');
var isArguments = require('../lib/is_arguments.js');
var objectKeys = require('../lib/keys.js');

test('equal', function (t) {
    t.ok(equal(
        { a : [ 2, 3 ], b : [ 4 ] },
        { a : [ 2, 3 ], b : [ 4 ] }
    ));
    t.end();
});

test('not equal', function (t) {
    t.notOk(equal(
        { x : 5, y : [6] },
        { x : 5, y : 6 }
    ));
    t.end();
});

test('nested nulls', function (t) {
    t.ok(equal([ null, null, null ], [ null, null, null ]));
    t.end();
});

test('strict equal', function (t) {
    t.notOk(equal(
        [ { a: 3 }, { b: 4 } ],
        [ { a: '3' }, { b: '4' } ],
        { strict: true }
    ));
    t.end();
});

test('non-objects', function (t) {
    t.ok(equal(3, 3));
    t.ok(equal('beep', 'beep'));
    t.ok(equal('3', 3));
    t.notOk(equal('3', 3, { strict: true }));
    t.notOk(equal('3', [3]));
    t.end();
});

test('arguments class', function (t) {
    t.ok(equal(
        (function(){return arguments})(1,2,3),
        (function(){return arguments})(1,2,3),
        "compares arguments"
    ));
    t.notOk(equal(
        (function(){return arguments})(1,2,3),
        [1,2,3],
        "differenciates array and arguments"
    ));
    t.end();
});

test('test the arguments shim', function (t) {
    t.ok(isArguments.supported((function(){return arguments})()));
    t.notOk(isArguments.supported([1,2,3]));
    
    t.ok(isArguments.unsupported((function(){return arguments})()));
    t.notOk(isArguments.unsupported([1,2,3]));
    
    t.end();
});

test('test the keys shim', function (t) {
    t.deepEqual(objectKeys.shim({ a: 1, b : 2 }), [ 'a', 'b' ]);
    t.end();
});

test('dates', function (t) {
    var d0 = new Date(1387585278000);
    var d1 = new Date('Fri Dec 20 2013 16:21:18 GMT-0800 (PST)');
    t.ok(equal(d0, d1));
    t.end();
});

test('buffers', function (t) {
    t.ok(equal(Buffer('xyz'), Buffer('xyz')));
    t.end();
});

test('booleans and arrays', function (t) {
    t.notOk(equal(true, []));
    t.end();
})

test('null == undefined', function (t) {
    t.ok(equal(null, undefined))
    t.notOk(equal(null, undefined, { strict: true }))
    t.end()
})
