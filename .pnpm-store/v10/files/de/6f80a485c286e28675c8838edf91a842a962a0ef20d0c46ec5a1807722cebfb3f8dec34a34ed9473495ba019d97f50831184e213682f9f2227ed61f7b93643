'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/flat');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.flat;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.flat) ? method : own;
};
