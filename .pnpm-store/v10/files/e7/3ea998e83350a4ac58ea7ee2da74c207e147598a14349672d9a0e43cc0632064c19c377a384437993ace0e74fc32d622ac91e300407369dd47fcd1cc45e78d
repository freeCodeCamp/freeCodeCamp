'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../string/virtual/match-all');

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.matchAll;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.matchAll) ? method : own;
};
