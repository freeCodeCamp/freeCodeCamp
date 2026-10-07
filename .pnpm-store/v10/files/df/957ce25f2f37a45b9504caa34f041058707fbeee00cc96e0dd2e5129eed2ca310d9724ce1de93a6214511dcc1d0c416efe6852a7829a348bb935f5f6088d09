// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var common = require('./common');
var assert = require('assert');
var EventEmitter = require('../');

var e = new EventEmitter();

e.once('hello', common.mustCall());

e.emit('hello', 'a', 'b');
e.emit('hello', 'a', 'b');
e.emit('hello', 'a', 'b');
e.emit('hello', 'a', 'b');

function remove() {
  assert.fail('once->foo should not be emitted');
}

e.once('foo', remove);
e.removeListener('foo', remove);
e.emit('foo');

e.once('e', common.mustCall(function() {
  e.emit('e');
}));

e.once('e', common.mustCall());

e.emit('e');

// Verify that the listener must be a function
assert.throws(function() {
  var ee = new EventEmitter();

  ee.once('foo', null);
}, /^TypeError: The "listener" argument must be of type Function. Received type object$/);

{
  // once() has different code paths based on the number of arguments being
  // emitted. Verify that all of the cases are covered.
  var maxArgs = 4;

  for (var i = 0; i <= maxArgs; ++i) {
    var ee = new EventEmitter();
    var args = ['foo'];

    for (var j = 0; j < i; ++j)
      args.push(j);

    ee.once('foo', common.mustCall(function() {
      var params = Array.prototype.slice.call(arguments);
      var restArgs = args.slice(1);
      assert.ok(Array.isArray(params));
      assert.strictEqual(params.length, restArgs.length);
      for (var index = 0; index < params.length; index++) {
        var param = params[index];
        assert.strictEqual(param, restArgs[index]);
      }
  	}));

    EventEmitter.prototype.emit.apply(ee, args);
  }
}
