'use strict';
var aNumber = require('../internals/a-number');

var $min = Math.min;
var $max = Math.max;

module.exports = function clamp(value, min, max) {
  return $min($max(aNumber(value), aNumber(min)), aNumber(max));
};
