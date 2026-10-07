'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../string/virtual/replace-all');

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.replaceAll;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.replaceAll) ? method : own;
};
