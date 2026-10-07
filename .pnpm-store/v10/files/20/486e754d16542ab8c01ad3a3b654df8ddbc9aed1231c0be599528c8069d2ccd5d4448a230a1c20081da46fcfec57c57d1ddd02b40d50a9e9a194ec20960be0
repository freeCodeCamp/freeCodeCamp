'use strict';

var common = require('./common');
var EventEmitter = require('../');
var assert = require('assert');

var ee = new EventEmitter();
var foo = Symbol('foo');
var listener = common.mustCall();

ee.on(foo, listener);
assert.strictEqual(ee.listeners(foo).length, 1);
assert.strictEqual(ee.listeners(foo)[0], listener);

ee.emit(foo);

ee.removeAllListeners();
assert.strictEqual(ee.listeners(foo).length, 0);

ee.on(foo, listener);
assert.strictEqual(ee.listeners(foo).length, 1);
assert.strictEqual(ee.listeners(foo)[0], listener);

ee.removeListener(foo, listener);
assert.strictEqual(ee.listeners(foo).length, 0);
