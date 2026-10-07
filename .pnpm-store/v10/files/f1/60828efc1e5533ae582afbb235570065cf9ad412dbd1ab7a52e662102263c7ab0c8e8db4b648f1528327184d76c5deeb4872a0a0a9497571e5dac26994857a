'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../string/virtual/ends-with');

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.endsWith;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.endsWith) ? method : own;
};
