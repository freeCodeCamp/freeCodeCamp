'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/reduce-right');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reduceRight;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.reduceRight) ? method : own;
};
