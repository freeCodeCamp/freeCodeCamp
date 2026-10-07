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
var events = require('../');
var test = require('tape');

function expect(expected) {
  var actual = [];
  test.onFinish(function() {
    var sortedActual = actual.sort();
    var sortedExpected = expected.sort();
    assert.strictEqual(sortedActual.length, sortedExpected.length);
    for (var index = 0; index < sortedActual.length; index++) {
      var value = sortedActual[index];
      assert.strictEqual(value, sortedExpected[index]);
    }
  });
  function listener(name) {
    actual.push(name);
  }
  return common.mustCall(listener, expected.length);
}

{
  var ee = new events.EventEmitter();
  var noop = common.mustNotCall();
  ee.on('foo', noop);
  ee.on('bar', noop);
  ee.on('baz', noop);
  ee.on('baz', noop);
  var fooListeners = ee.listeners('foo');
  var barListeners = ee.listeners('bar');
  var bazListeners = ee.listeners('baz');
  ee.on('removeListener', expect(['bar', 'baz', 'baz']));
  ee.removeAllListeners('bar');
  ee.removeAllListeners('baz');

  var listeners = ee.listeners('foo');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 1);
  assert.strictEqual(listeners[0], noop);

  listeners = ee.listeners('bar');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 0);
  listeners = ee.listeners('baz');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 0);
  // After calling removeAllListeners(),
  // the old listeners array should stay unchanged.
  assert.strictEqual(fooListeners.length, 1);
  assert.strictEqual(fooListeners[0], noop);
  assert.strictEqual(barListeners.length, 1);
  assert.strictEqual(barListeners[0], noop);
  assert.strictEqual(bazListeners.length, 2);
  assert.strictEqual(bazListeners[0], noop);
  assert.strictEqual(bazListeners[1], noop);
  // After calling removeAllListeners(),
  // new listeners arrays is different from the old.
  assert.notStrictEqual(ee.listeners('bar'), barListeners);
  assert.notStrictEqual(ee.listeners('baz'), bazListeners);
}

{
  var ee = new events.EventEmitter();
  ee.on('foo', common.mustNotCall());
  ee.on('bar', common.mustNotCall());
  // Expect LIFO order
  ee.on('removeListener', expect(['foo', 'bar', 'removeListener']));
  ee.on('removeListener', expect(['foo', 'bar']));
  ee.removeAllListeners();

  var listeners = ee.listeners('foo');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 0);
  listeners = ee.listeners('bar');
  assert.ok(Array.isArray(listeners));
  assert.strictEqual(listeners.length, 0);
}

{
  var ee = new events.EventEmitter();
  ee.on('removeListener', common.mustNotCall());
  // Check for regression where removeAllListeners() throws when
  // there exists a 'removeListener' listener, but there exists
  // no listeners for the provided event type.
  assert.doesNotThrow(function () { ee.removeAllListeners(ee, 'foo') });
}

{
  var ee = new events.EventEmitter();
  var expectLength = 2;
  ee.on('removeListener', function() {
    assert.strictEqual(expectLength--, this.listeners('baz').length);
  });
  ee.on('baz', common.mustNotCall());
  ee.on('baz', common.mustNotCall());
  ee.on('baz', common.mustNotCall());
  assert.strictEqual(ee.listeners('baz').length, expectLength + 1);
  ee.removeAllListeners('baz');
  assert.strictEqual(ee.listeners('baz').length, 0);
}

{
  var ee = new events.EventEmitter();
  assert.strictEqual(ee, ee.removeAllListeners());
}

{
  var ee = new events.EventEmitter();
  ee._events = undefined;
  assert.strictEqual(ee, ee.removeAllListeners());
}
