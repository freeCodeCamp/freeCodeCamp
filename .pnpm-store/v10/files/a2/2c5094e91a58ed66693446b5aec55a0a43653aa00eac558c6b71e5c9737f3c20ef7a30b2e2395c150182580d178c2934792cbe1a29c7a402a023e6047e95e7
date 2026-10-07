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

{
  var ee = new EventEmitter();
  var events_new_listener_emitted = [];
  var listeners_new_listener_emitted = [];

  // Sanity check
  assert.strictEqual(ee.addListener, ee.on);

  ee.on('newListener', function(event, listener) {
    // Don't track newListener listeners.
    if (event === 'newListener')
      return;

    events_new_listener_emitted.push(event);
    listeners_new_listener_emitted.push(listener);
  });

  var hello = common.mustCall(function(a, b) {
    assert.strictEqual('a', a);
    assert.strictEqual('b', b);
  });

  ee.once('newListener', function(name, listener) {
    assert.strictEqual(name, 'hello');
    assert.strictEqual(listener, hello);

    var listeners = this.listeners('hello');
    assert.ok(Array.isArray(listeners));
    assert.strictEqual(listeners.length, 0);
  });

  ee.on('hello', hello);
  ee.once('foo', assert.fail);

  assert.ok(Array.isArray(events_new_listener_emitted));
  assert.strictEqual(events_new_listener_emitted.length, 2);
  assert.strictEqual(events_new_listener_emitted[0], 'hello');
  assert.strictEqual(events_new_listener_emitted[1], 'foo');

  assert.ok(Array.isArray(listeners_new_listener_emitted));
  assert.strictEqual(listeners_new_listener_emitted.length, 2);
  assert.strictEqual(listeners_new_listener_emitted[0], hello);
  assert.strictEqual(listeners_new_listener_emitted[1], assert.fail);

  ee.emit('hello', 'a', 'b');
}

// just make sure that this doesn't throw:
{
  var f = new EventEmitter();

  f.setMaxListeners(0);
}

{
  var listen1 = function() {};
  var listen2 = function() {};
  var ee = new EventEmitter();

  ee.once('newListener', function() {
    var listeners = ee.listeners('hello');
    assert.ok(Array.isArray(listeners));
    assert.strictEqual(listeners.length, 0);
    ee.once('newListener', function() {
      var listeners = ee.listeners('hello');
      assert.ok(Array.isArray(listeners));
      assert.strictEqual(listeners.length, 0);
    });
    ee.on('hello', listen2);
  });
  ee.on('hello', listen1);
  // The order of listeners on an event is not always the order in which the
  // listeners were added.
  var listeners = ee.listeners('hello');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 2);
  assert.strictEqual(listeners[0], listen2);
  assert.strictEqual(listeners[1], listen1);
}

// Verify that the listener must be a function
assert.throws(function() {
  var ee = new EventEmitter();

  ee.on('foo', null);
}, /^TypeError: The "listener" argument must be of type Function. Received type object$/);
