'use strict';

var isObject = require('is-extendable');
var union = require('arr-union');
var get = require('get-value');
var set = require('set-value');

module.exports = function unionValue(obj, prop, value) {
  if (!isObject(obj)) {
    throw new TypeError('union-value expects the first argument to be an object.');
  }

  if (typeof prop !== 'string') {
    throw new TypeError('union-value expects `prop` to be a string.');
  }

  var arr = arrayify(get(obj, prop));
  set(obj, prop, union(arr, arrayify(value)));
  return obj;
};

function arrayify(val) {
  if (val === null || typeof val === 'undefined') {
    return [];
  }
  if (Array.isArray(val)) {
    return val;
  }
  return [val];
}
