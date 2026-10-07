'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/keys');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.keys;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.keys) ? method : own;
};
