'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../string/virtual/to-well-formed');

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.toWellFormed;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.toWellFormed) ? method : own;
};
