'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../string/virtual/is-well-formed');

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.isWellFormed;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.isWellFormed) ? method : own;
};
