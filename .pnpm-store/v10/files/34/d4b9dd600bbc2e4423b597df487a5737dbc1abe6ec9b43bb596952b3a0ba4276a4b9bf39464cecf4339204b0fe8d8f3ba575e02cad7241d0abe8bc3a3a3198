'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/find-last-index');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.findLastIndex;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.findLastIndex) ? method : own;
};
