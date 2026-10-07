'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/to-spliced');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.toSpliced;
  return (it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.toSpliced)) ? method : own;
};
