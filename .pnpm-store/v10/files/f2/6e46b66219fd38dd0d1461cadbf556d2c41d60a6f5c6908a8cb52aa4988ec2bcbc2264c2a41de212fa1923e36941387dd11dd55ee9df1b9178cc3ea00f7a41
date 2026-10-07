'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/slice');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.slice;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.slice) ? method : own;
};
