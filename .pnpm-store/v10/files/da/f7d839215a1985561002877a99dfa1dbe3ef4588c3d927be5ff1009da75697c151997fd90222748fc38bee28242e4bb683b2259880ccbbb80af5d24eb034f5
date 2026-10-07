'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/to-reversed');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.toReversed;
  return (it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.toReversed)) ? method : own;
};
