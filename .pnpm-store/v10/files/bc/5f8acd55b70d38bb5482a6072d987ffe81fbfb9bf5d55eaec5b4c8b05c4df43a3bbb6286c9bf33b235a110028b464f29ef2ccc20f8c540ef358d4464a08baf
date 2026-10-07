'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/reverse');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reverse;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.reverse) ? method : own;
};
