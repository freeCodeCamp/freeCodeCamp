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

var EventEmitter = require('../').EventEmitter;

var e = new EventEmitter();
var fl;  // foo listeners

fl = e.listeners('foo');
assert.ok(Array.isArray(fl));
assert.strictEqual(fl.length, 0);
if (Object.create) assert.ok(!(e._events instanceof Object));
assert.strictEqual(Object.keys(e._events).length, 0);

e.on('foo', assert.fail);
fl = e.listeners('foo');
assert.strictEqual(e._events.foo, assert.fail);
assert.ok(Array.isArray(fl));
assert.strictEqual(fl.length, 1);
assert.strictEqual(fl[0], assert.fail);

e.listeners('bar');

e.on('foo', assert.ok);
fl = e.listeners('foo');

assert.ok(Array.isArray(e._events.foo));
assert.strictEqual(e._events.foo.length, 2);
assert.strictEqual(e._events.foo[0], assert.fail);
assert.strictEqual(e._events.foo[1], assert.ok);

assert.ok(Array.isArray(fl));
assert.strictEqual(fl.length, 2);
assert.strictEqual(fl[0], assert.fail);
assert.strictEqual(fl[1], assert.ok);
