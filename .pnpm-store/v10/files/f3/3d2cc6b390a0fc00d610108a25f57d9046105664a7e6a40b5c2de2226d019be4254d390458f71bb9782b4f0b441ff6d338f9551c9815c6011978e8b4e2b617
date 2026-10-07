'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../string/virtual/trim-end');

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.trimEnd;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.trimEnd) ? method : own;
};
