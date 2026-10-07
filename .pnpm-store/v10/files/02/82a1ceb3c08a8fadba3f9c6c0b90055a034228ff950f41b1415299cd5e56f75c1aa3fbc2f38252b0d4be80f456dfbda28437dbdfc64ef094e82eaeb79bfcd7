'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../string/virtual/starts-with');

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.startsWith;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.startsWith) ? method : own;
};
