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

var listener1 = function listener1() {};
var listener2 = function listener2() {};

{
  var ee = new EventEmitter();
  ee.on('hello', listener1);
  ee.on('removeListener', common.mustCall(function(name, cb) {
    assert.strictEqual(name, 'hello');
    assert.strictEqual(cb, listener1);
  }));
  ee.removeListener('hello', listener1);
  var listeners = ee.listeners('hello');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 0);
}

{
  var ee = new EventEmitter();
  ee.on('hello', listener1);
  ee.on('removeListener', common.mustNotCall());
  ee.removeListener('hello', listener2);

  var listeners = ee.listeners('hello');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 1);
  assert.strictEqual(listeners[0], listener1);
}

{
  var ee = new EventEmitter();
  ee.on('hello', listener1);
  ee.on('hello', listener2);

  var listeners;
  ee.once('removeListener', common.mustCall(function(name, cb) {
    assert.strictEqual(name, 'hello');
    assert.strictEqual(cb, listener1);
    listeners = ee.listeners('hello');
    assert.ok(Array.isArray(listeners));
    assert.strictEqual(listeners.length, 1);
    assert.strictEqual(listeners[0], listener2);
  }));
  ee.removeListener('hello', listener1);
  listeners = ee.listeners('hello');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 1);
  assert.strictEqual(listeners[0], listener2);
  ee.once('removeListener', common.mustCall(function(name, cb) {
    assert.strictEqual(name, 'hello');
    assert.strictEqual(cb, listener2);
    listeners = ee.listeners('hello');
    assert.ok(Array.isArray(listeners));
    assert.strictEqual(listeners.length, 0);
  }));
  ee.removeListener('hello', listener2);
  listeners = ee.listeners('hello');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 0);
}

{
  var ee = new EventEmitter();

  function remove1() {
    assert.fail('remove1 should not have been called');
  }

  function remove2() {
    assert.fail('remove2 should not have been called');
  }

  ee.on('removeListener', common.mustCall(function(name, cb) {
    if (cb !== remove1) return;
    this.removeListener('quux', remove2);
    this.emit('quux');
  }, 2));
  ee.on('quux', remove1);
  ee.on('quux', remove2);
  ee.removeListener('quux', remove1);
}

{
  var ee = new EventEmitter();
  ee.on('hello', listener1);
  ee.on('hello', listener2);

  var listeners;
  ee.once('removeListener', common.mustCall(function(name, cb) {
    assert.strictEqual(name, 'hello');
    assert.strictEqual(cb, listener1);
    listeners = ee.listeners('hello');
    assert.ok(Array.isArray(listeners));
    assert.strictEqual(listeners.length, 1);
    assert.strictEqual(listeners[0], listener2);
    ee.once('removeListener', common.mustCall(function(name, cb) {
      assert.strictEqual(name, 'hello');
      assert.strictEqual(cb, listener2);
      listeners = ee.listeners('hello');
      assert.ok(Array.isArray(listeners));
      assert.strictEqual(listeners.length, 0);
    }));
    ee.removeListener('hello', listener2);
    listeners = ee.listeners('hello');
    assert.ok(Array.isArray(listeners));
    assert.strictEqual(listeners.length, 0);
  }));
  ee.removeListener('hello', listener1);
  listeners = ee.listeners('hello');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 0);
}

{
  var ee = new EventEmitter();
  var listener3 = common.mustCall(function() {
    ee.removeListener('hello', listener4);
  }, 2);
  var listener4 = common.mustCall();

  ee.on('hello', listener3);
  ee.on('hello', listener4);

  // listener4 will still be called although it is removed by listener 3.
  ee.emit('hello');
  // This is so because the interal listener array at time of emit
  // was [listener3,listener4]

  // Interal listener array [listener3]
  ee.emit('hello');
}

{
  var ee = new EventEmitter();

  ee.once('hello', listener1);
  ee.on('removeListener', common.mustCall(function(eventName, listener) {
    assert.strictEqual(eventName, 'hello');
    assert.strictEqual(listener, listener1);
  }));
  ee.emit('hello');
}

{
  var ee = new EventEmitter();

  assert.strictEqual(ee, ee.removeListener('foo', function() {}));
}

// Verify that the removed listener must be a function
assert.throws(function() {
  var ee = new EventEmitter();

  ee.removeListener('foo', null);
}, /^TypeError: The "listener" argument must be of type Function\. Received type object$/);

{
  var ee = new EventEmitter();
  var listener = function() {};
  ee._events = undefined;
  var e = ee.removeListener('foo', listener);
  assert.strictEqual(e, ee);
}

{
  var ee = new EventEmitter();

  ee.on('foo', listener1);
  ee.on('foo', listener2);
  var listeners = ee.listeners('foo');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 2);
  assert.strictEqual(listeners[0], listener1);
  assert.strictEqual(listeners[1], listener2);

  ee.removeListener('foo', listener1);
  assert.strictEqual(ee._events.foo, listener2);

  ee.on('foo', listener1);
  listeners = ee.listeners('foo');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 2);
  assert.strictEqual(listeners[0], listener2);
  assert.strictEqual(listeners[1], listener1);

  ee.removeListener('foo', listener1);
  assert.strictEqual(ee._events.foo, listener2);
}
