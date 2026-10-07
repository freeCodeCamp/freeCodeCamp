'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/group-by');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.groupBy;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.groupBy) ? method : own;
};
