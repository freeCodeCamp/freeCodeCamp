'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/last-index-of');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.lastIndexOf;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.lastIndexOf) ? method : own;
};
