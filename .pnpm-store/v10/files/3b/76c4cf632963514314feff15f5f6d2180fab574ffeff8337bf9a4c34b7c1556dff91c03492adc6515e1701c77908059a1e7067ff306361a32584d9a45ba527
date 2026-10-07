'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../array/virtual/with');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it['with'];
  return (it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype['with'])) ? method : own;
};
