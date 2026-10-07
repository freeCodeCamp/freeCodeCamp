'use strict';
// TODO: Remove from `core-js@4`
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/filter-out');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filterOut;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.filterOut) ? method : own;
};
