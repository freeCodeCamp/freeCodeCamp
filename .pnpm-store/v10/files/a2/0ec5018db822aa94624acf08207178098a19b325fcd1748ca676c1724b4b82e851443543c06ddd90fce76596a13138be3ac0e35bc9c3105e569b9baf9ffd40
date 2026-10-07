'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../string/virtual/trim-right');

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.trimRight;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.trimRight) ? method : own;
};
