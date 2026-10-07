'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/entries');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.entries;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.entries) ? method : own;
};
