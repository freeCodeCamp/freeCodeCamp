'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/some');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.some;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.some) ? method : own;
};
