'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/values');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.values;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.values) ? method : own;
};
