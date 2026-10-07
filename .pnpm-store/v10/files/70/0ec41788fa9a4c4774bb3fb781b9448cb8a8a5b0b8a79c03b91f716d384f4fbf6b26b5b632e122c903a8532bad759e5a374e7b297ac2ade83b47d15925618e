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

require('./common');
var assert = require('assert');
var events = require('../');

var e = new events.EventEmitter();
var num_args_emitted = [];

e.on('numArgs', function() {
  var numArgs = arguments.length;
  num_args_emitted.push(numArgs);
});

e.on('foo', function() {
  num_args_emitted.push(arguments.length);
});

e.on('foo', function() {
  num_args_emitted.push(arguments.length);
});

e.emit('numArgs');
e.emit('numArgs', null);
e.emit('numArgs', null, null);
e.emit('numArgs', null, null, null);
e.emit('numArgs', null, null, null, null);
e.emit('numArgs', null, null, null, null, null);

e.emit('foo', null, null, null, null);

assert.ok(Array.isArray(num_args_emitted));
assert.strictEqual(num_args_emitted.length, 8);
assert.strictEqual(num_args_emitted[0], 0);
assert.strictEqual(num_args_emitted[1], 1);
assert.strictEqual(num_args_emitted[2], 2);
assert.strictEqual(num_args_emitted[3], 3);
assert.strictEqual(num_args_emitted[4], 4);
assert.strictEqual(num_args_emitted[5], 5);
assert.strictEqual(num_args_emitted[6], 4);
assert.strictEqual(num_args_emitted[6], 4);
