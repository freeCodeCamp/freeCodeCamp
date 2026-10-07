'use strict';

var common = require('./common');
var EventEmitter = require('../');
var assert = require('assert');

var ee = new EventEmitter();
var handler = function() {};

assert.strictEqual(ee.eventNames().length, 0);

assert.strictEqual(ee._events.hasOwnProperty, undefined);
assert.strictEqual(ee._events.toString, undefined);

ee.on('__defineGetter__', handler);
ee.on('toString', handler);
ee.on('__proto__', handler);

assert.strictEqual(ee.eventNames()[0], '__defineGetter__');
assert.strictEqual(ee.eventNames()[1], 'toString');

assert.strictEqual(ee.listeners('__defineGetter__').length, 1);
assert.strictEqual(ee.listeners('__defineGetter__')[0], handler);
assert.strictEqual(ee.listeners('toString').length, 1);
assert.strictEqual(ee.listeners('toString')[0], handler);

// Only run __proto__ tests if that property can actually be set
if ({ __proto__: 'ok' }.__proto__ === 'ok') {
  assert.strictEqual(ee.eventNames().length, 3);
  assert.strictEqual(ee.eventNames()[2], '__proto__');
  assert.strictEqual(ee.listeners('__proto__').length, 1);
  assert.strictEqual(ee.listeners('__proto__')[0], handler);

  ee.on('__proto__', common.mustCall(function(val) {
    assert.strictEqual(val, 1);
  }));
  ee.emit('__proto__', 1);

  process.on('__proto__', common.mustCall(function(val) {
    assert.strictEqual(val, 1);
  }));
  process.emit('__proto__', 1);
} else {
  console.log('# skipped __proto__')
}
