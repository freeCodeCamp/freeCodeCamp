'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../string/virtual/trim-start');

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.trimStart;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.trimStart) ? method : own;
};
