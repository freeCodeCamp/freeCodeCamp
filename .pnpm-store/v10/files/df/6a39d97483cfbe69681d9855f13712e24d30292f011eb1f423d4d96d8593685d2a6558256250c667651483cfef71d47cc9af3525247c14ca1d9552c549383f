'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/fill');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.fill;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.fill) ? method : own;
};
