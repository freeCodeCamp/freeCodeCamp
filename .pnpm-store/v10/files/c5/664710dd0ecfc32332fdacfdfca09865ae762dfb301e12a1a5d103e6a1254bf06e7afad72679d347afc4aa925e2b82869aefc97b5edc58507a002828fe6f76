'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/filter');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.filter) ? method : own;
};
