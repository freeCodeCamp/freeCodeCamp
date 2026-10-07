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
var EventEmitter = require('../');

var emitter = new EventEmitter();
emitter.on('foo', function() {});
emitter.on('foo', function() {});
emitter.on('baz', function() {});
// Allow any type
emitter.on(123, function() {});

assert.strictEqual(EventEmitter.listenerCount(emitter, 'foo'), 2);
assert.strictEqual(emitter.listenerCount('foo'), 2);
assert.strictEqual(emitter.listenerCount('bar'), 0);
assert.strictEqual(emitter.listenerCount('baz'), 1);
assert.strictEqual(emitter.listenerCount(123), 1);
