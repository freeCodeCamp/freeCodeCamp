'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../function/virtual/demethodize');

var FunctionPrototype = Function.prototype;

module.exports = function (it) {
  var own = it.demethodize;
  return it === FunctionPrototype || (isPrototypeOf(FunctionPrototype, it) && own === FunctionPrototype.demethodize) ? method : own;
};
