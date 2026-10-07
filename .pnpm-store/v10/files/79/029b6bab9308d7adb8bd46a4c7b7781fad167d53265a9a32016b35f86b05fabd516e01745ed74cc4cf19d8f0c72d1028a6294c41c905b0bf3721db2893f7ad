'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/group-to-map');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.groupToMap;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.groupToMap) ? method : own;
};
