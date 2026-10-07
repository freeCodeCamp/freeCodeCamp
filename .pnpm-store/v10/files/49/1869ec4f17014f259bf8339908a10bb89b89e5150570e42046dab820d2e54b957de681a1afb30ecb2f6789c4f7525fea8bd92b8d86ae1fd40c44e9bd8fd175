'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/group');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.group;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.group) ? method : own;
};
