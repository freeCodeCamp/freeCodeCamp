'use strict';

var common = require('./common');
var EventEmitter = require('../').EventEmitter;
var once = require('../').once;
var has = require('has');
var assert = require('assert');

function Event(type) {
  this.type = type;
}

function EventTargetMock() {
  this.events = {};

  this.addEventListener = common.mustCall(this.addEventListener);
  this.removeEventListener = common.mustCall(this.removeEventListener);
}

EventTargetMock.prototype.addEventListener = function addEventListener(name, listener, options) {
  if (!(name in this.events)) {
    this.events[name] = { listeners: [], options: options || {} }
  }
  this.events[name].listeners.push(listener);
};

EventTargetMock.prototype.removeEventListener = function removeEventListener(name, callback) {
  if (!(name in this.events)) {
    return;
  }
  var event = this.events[name];
  var stack = event.listeners;

  for (var i = 0, l = stack.length; i < l; i++) {
    if (stack[i] === callback) {
      stack.splice(i, 1);
      if (stack.length === 0) {
        delete this.events[name];
      }
      return;
    }
  }
};

EventTargetMock.prototype.dispatchEvent = function dispatchEvent(arg) {
  if (!(arg.type in this.events)) {
    return true;
  }

  var event = this.events[arg.type];
  var stack = event.listeners.slice();

  for (var i = 0, l = stack.length; i < l; i++) {
    stack[i].call(null, arg);
    if (event.options.once) {
      this.removeEventListener(arg.type, stack[i]);
    }
  }
  return !arg.defaultPrevented;
};

function onceAnEvent() {
  var ee = new EventEmitter();

  process.nextTick(function () {
    ee.emit('myevent', 42);
  });

  return once(ee, 'myevent').then(function (args) {
    var value = args[0]
    assert.strictEqual(value, 42);
    assert.strictEqual(ee.listenerCount('error'), 0);
    assert.strictEqual(ee.listenerCount('myevent'), 0);
  });
}

function onceAnEventWithTwoArgs() {
  var ee = new EventEmitter();

  process.nextTick(function () {
    ee.emit('myevent', 42, 24);
  });

  return once(ee, 'myevent').then(function (value) {
    assert.strictEqual(value.length, 2);
    assert.strictEqual(value[0], 42);
    assert.strictEqual(value[1], 24);
  });
}

function catchesErrors() {
  var ee = new EventEmitter();

  var expected = new Error('kaboom');
  var err;
  process.nextTick(function () {
    ee.emit('error', expected);
  });

  return once(ee, 'myevent').then(function () {
    throw new Error('should reject')
  }, function (err) {
    assert.strictEqual(err, expected);
    assert.strictEqual(ee.listenerCount('error'), 0);
    assert.strictEqual(ee.listenerCount('myevent'), 0);
  });
}

function stopListeningAfterCatchingError() {
  var ee = new EventEmitter();

  var expected = new Error('kaboom');
  var err;
  process.nextTick(function () {
    ee.emit('error', expected);
    ee.emit('myevent', 42, 24);
  });

  // process.on('multipleResolves', common.mustNotCall());

  return once(ee, 'myevent').then(common.mustNotCall, function (err) {
    // process.removeAllListeners('multipleResolves');
    assert.strictEqual(err, expected);
    assert.strictEqual(ee.listenerCount('error'), 0);
    assert.strictEqual(ee.listenerCount('myevent'), 0);
  });
}

function onceError() {
  var ee = new EventEmitter();

  var expected = new Error('kaboom');
  process.nextTick(function () {
    ee.emit('error', expected);
  });

  var promise = once(ee, 'error');
  assert.strictEqual(ee.listenerCount('error'), 1);
  return promise.then(function (args) {
    var err = args[0]
    assert.strictEqual(err, expected);
    assert.strictEqual(ee.listenerCount('error'), 0);
    assert.strictEqual(ee.listenerCount('myevent'), 0);
  });
}

function onceWithEventTarget() {
  var et = new EventTargetMock();
  var event = new Event('myevent');
  process.nextTick(function () {
    et.dispatchEvent(event);
  });
  return once(et, 'myevent').then(function (args) {
    var value = args[0];
    assert.strictEqual(value, event);
    assert.strictEqual(has(et.events, 'myevent'), false);
  });
}

function onceWithEventTargetError() {
  var et = new EventTargetMock();
  var error = new Event('error');
  process.nextTick(function () {
    et.dispatchEvent(error);
  });
  return once(et, 'error').then(function (args) {
    var err = args[0];
    assert.strictEqual(err, error);
    assert.strictEqual(has(et.events, 'error'), false);
  });
}

function prioritizesEventEmitter() {
  var ee = new EventEmitter();
  ee.addEventListener = assert.fail;
  ee.removeAllListeners = assert.fail;
  process.nextTick(function () {
    ee.emit('foo');
  });
  return once(ee, 'foo');
}

var allTests = [
  onceAnEvent(),
  onceAnEventWithTwoArgs(),
  catchesErrors(),
  stopListeningAfterCatchingError(),
  onceError(),
  onceWithEventTarget(),
  onceWithEventTargetError(),
  prioritizesEventEmitter()
];

var hasBrowserEventTarget = false;
try {
  hasBrowserEventTarget = typeof (new window.EventTarget().addEventListener) === 'function' &&
    new window.Event('xyz').type === 'xyz';
} catch (err) {}

if (hasBrowserEventTarget) {
  var onceWithBrowserEventTarget = function onceWithBrowserEventTarget() {
    var et = new window.EventTarget();
    var event = new window.Event('myevent');
    process.nextTick(function () {
      et.dispatchEvent(event);
    });
    return once(et, 'myevent').then(function (args) {
      var value = args[0];
      assert.strictEqual(value, event);
      assert.strictEqual(has(et.events, 'myevent'), false);
    });
  }

  var onceWithBrowserEventTargetError = function onceWithBrowserEventTargetError() {
    var et = new window.EventTarget();
    var error = new window.Event('error');
    process.nextTick(function () {
      et.dispatchEvent(error);
    });
    return once(et, 'error').then(function (args) {
      var err = args[0];
      assert.strictEqual(err, error);
      assert.strictEqual(has(et.events, 'error'), false);
    });
  }

  common.test.comment('Testing with browser built-in EventTarget');
  allTests.push([
    onceWithBrowserEventTarget(),
    onceWithBrowserEventTargetError()
  ]);
}

module.exports = Promise.all(allTests);
