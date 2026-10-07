'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var arrayMethod = require('../array/virtual/at');
var stringMethod = require('../string/virtual/at');

var ArrayPrototype = Array.prototype;
var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.at;
  if (it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.at)) return arrayMethod;
  if (typeof it == 'string' || it === StringPrototype || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.at)) {
    return stringMethod;
  } return own;
};
