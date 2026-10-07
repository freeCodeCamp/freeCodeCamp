'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../string/virtual/pad-end');

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.padEnd;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.padEnd) ? method : own;
};
