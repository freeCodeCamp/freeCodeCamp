'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../string/virtual/code-point-at');

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.codePointAt;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.codePointAt) ? method : own;
};
