'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../string/virtual/trim-left');

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.trimLeft;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.trimLeft) ? method : own;
};
