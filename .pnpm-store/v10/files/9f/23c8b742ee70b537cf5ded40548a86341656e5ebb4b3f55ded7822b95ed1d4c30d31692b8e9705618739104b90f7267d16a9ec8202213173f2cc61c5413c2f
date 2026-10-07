'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../function/virtual/un-this');

var FunctionPrototype = Function.prototype;

module.exports = function (it) {
  var own = it.unThis;
  return it === FunctionPrototype || (isPrototypeOf(FunctionPrototype, it) && own === FunctionPrototype.unThis) ? method : own;
};
