'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/every');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.every;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.every) ? method : own;
};
