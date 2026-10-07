'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/group-by-to-map');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.groupByToMap;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.groupByToMap) ? method : own;
};
