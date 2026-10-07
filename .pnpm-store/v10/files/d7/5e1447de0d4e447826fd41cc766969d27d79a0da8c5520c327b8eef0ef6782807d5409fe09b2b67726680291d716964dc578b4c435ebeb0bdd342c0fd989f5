'use strict';

var common = require('./common');
var EventEmitter = require('../');
var assert = require('assert');

var myEE = new EventEmitter();
var m = 0;
// This one comes last.
myEE.on('foo', common.mustCall(function () {
  assert.strictEqual(m, 2);
}));

// This one comes second.
myEE.prependListener('foo', common.mustCall(function () {
  assert.strictEqual(m++, 1);
}));

// This one comes first.
myEE.prependOnceListener('foo',
                         common.mustCall(function () {
                           assert.strictEqual(m++, 0);
                         }));

myEE.emit('foo');

// Verify that the listener must be a function
assert.throws(function () {
  var ee = new EventEmitter();
  ee.prependOnceListener('foo', null);
}, 'TypeError: The "listener" argument must be of type Function. Received type object');
