var assert = require('assert');
var stackback = require('./');

test('capture', function() {
    var err = new Error();
    var stack = stackback(err);
    assert.equal(stack[0].getFileName(), __filename);
});

// calling stackback on the same error twice should work
test('multiple calls', function() {
    var err = new Error();
    var stack1 = stackback(err);
    var stack2 = stackback(err);
    assert.equal(stack1[0].getFileName(), __filename);
    assert.deepEqual(stack1, stack2);
});

test('string', function() {
    var err = new Error();
    stackback(err);
    assert.equal(typeof err.stack, 'string');
});

