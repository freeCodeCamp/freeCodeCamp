'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../string/virtual/repeat');

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.repeat;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.repeat) ? method : own;
};
