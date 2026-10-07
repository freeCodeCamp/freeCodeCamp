'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/push');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.push;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.push) ? method : own;
};
