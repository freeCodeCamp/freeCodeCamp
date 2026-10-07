'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/to-sorted');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.toSorted;
  return (it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.toSorted)) ? method : own;
};
