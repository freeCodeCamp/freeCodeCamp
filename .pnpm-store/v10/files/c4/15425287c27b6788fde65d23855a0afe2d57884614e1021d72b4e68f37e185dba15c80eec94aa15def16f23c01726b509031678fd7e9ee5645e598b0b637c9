'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/flat-map');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.flatMap;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.flatMap) ? method : own;
};
