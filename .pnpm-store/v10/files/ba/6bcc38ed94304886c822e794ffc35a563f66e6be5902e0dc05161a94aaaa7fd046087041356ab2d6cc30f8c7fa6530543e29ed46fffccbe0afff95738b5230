'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/find-index');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.findIndex;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.findIndex) ? method : own;
};
