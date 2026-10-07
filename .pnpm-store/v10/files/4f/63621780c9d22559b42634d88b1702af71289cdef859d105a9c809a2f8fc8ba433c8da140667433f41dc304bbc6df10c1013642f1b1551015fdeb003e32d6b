'use strict';
var assert = require('assert');
var EventEmitter = require('../');

var EE = new EventEmitter();

assert.throws(function () {
  EE.emit('error', 'Accepts a string');
}, 'Error: Unhandled error. (Accepts a string)');

assert.throws(function () {
  EE.emit('error', { message: 'Error!' });
}, 'Unhandled error. ([object Object])');
