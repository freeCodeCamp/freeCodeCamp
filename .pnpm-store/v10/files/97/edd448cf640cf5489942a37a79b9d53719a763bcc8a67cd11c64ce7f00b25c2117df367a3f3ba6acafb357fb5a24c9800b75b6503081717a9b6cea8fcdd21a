'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../function/virtual/bind');

var FunctionPrototype = Function.prototype;

module.exports = function (it) {
  var own = it.bind;
  return it === FunctionPrototype || (isPrototypeOf(FunctionPrototype, it) && own === FunctionPrototype.bind) ? method : own;
};
