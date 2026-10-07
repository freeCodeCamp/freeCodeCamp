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
var util = require('util');

function listener() {}
function listener2() {}
function listener3() {
  return 0;
}
function listener4() {
  return 1;
}

function TestStream() {}
util.inherits(TestStream, events.EventEmitter);

{
  var ee = new events.EventEmitter();
  ee.on('foo', listener);
  var fooListeners = ee.listeners('foo');

  var listeners = ee.listeners('foo');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 1);
  assert.strictEqual(listeners[0], listener);

  ee.removeAllListeners('foo');
  listeners = ee.listeners('foo');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 0);

  assert.ok(Array.isArray(fooListeners));
  assert.strictEqual(fooListeners.length, 1);
  assert.strictEqual(fooListeners[0], listener);
}

{
  var ee = new events.EventEmitter();
  ee.on('foo', listener);

  var eeListenersCopy = ee.listeners('foo');
  assert.ok(Array.isArray(eeListenersCopy));
  assert.strictEqual(eeListenersCopy.length, 1);
  assert.strictEqual(eeListenersCopy[0], listener);

  var listeners = ee.listeners('foo');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 1);
  assert.strictEqual(listeners[0], listener);

  eeListenersCopy.push(listener2);
  listeners = ee.listeners('foo');
  
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 1);
  assert.strictEqual(listeners[0], listener);

  assert.strictEqual(eeListenersCopy.length, 2);
  assert.strictEqual(eeListenersCopy[0], listener);
  assert.strictEqual(eeListenersCopy[1], listener2);
}

{
  var ee = new events.EventEmitter();
  ee.on('foo', listener);
  var eeListenersCopy = ee.listeners('foo');
  ee.on('foo', listener2);

  var listeners = ee.listeners('foo');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 2);
  assert.strictEqual(listeners[0], listener);
  assert.strictEqual(listeners[1], listener2);

  assert.ok(Array.isArray(eeListenersCopy));
  assert.strictEqual(eeListenersCopy.length, 1);
  assert.strictEqual(eeListenersCopy[0], listener);
}

{
  var ee = new events.EventEmitter();
  ee.once('foo', listener);
  var listeners = ee.listeners('foo');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 1);
  assert.strictEqual(listeners[0], listener);
}

{
  var ee = new events.EventEmitter();
  ee.on('foo', listener);
  ee.once('foo', listener2);

  var listeners = ee.listeners('foo');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 2);
  assert.strictEqual(listeners[0], listener);
  assert.strictEqual(listeners[1], listener2);
}

{
  var ee = new events.EventEmitter();
  ee._events = undefined;
  var listeners = ee.listeners('foo');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 0);
}

{
  var s = new TestStream();
  var listeners = s.listeners('foo');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 0);
}


{
  var ee = new events.EventEmitter();
  ee.on('foo', listener);
  var wrappedListener = ee.rawListeners('foo');
  assert.strictEqual(wrappedListener.length, 1);
  assert.strictEqual(wrappedListener[0], listener);
  assert.notStrictEqual(wrappedListener, ee.rawListeners('foo'));
  ee.once('foo', listener);
  var wrappedListeners = ee.rawListeners('foo');
  assert.strictEqual(wrappedListeners.length, 2);
  assert.strictEqual(wrappedListeners[0], listener);
  assert.notStrictEqual(wrappedListeners[1], listener);
  assert.strictEqual(wrappedListeners[1].listener, listener);
  assert.notStrictEqual(wrappedListeners, ee.rawListeners('foo'));
  ee.emit('foo');
  assert.strictEqual(wrappedListeners.length, 2);
  assert.strictEqual(wrappedListeners[1].listener, listener);
}

{
  var ee = new events.EventEmitter();
  ee.once('foo', listener3);
  ee.on('foo', listener4);
  var rawListeners = ee.rawListeners('foo');
  assert.strictEqual(rawListeners.length, 2);
  assert.strictEqual(rawListeners[0](), 0);
  var rawListener = ee.rawListeners('foo');
  assert.strictEqual(rawListener.length, 1);
  assert.strictEqual(rawListener[0](), 1);
}
