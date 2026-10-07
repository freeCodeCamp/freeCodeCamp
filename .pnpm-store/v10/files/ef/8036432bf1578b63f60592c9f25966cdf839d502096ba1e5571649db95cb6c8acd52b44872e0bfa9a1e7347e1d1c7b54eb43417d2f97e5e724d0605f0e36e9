'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/find-last');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.findLast;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.findLast) ? method : own;
};
