'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/unshift');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.unshift;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.unshift) ? method : own;
};
