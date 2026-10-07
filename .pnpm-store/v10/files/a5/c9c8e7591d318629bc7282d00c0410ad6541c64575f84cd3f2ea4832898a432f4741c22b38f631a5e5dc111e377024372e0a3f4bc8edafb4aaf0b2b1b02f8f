'use strict';
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');

var $RangeError = RangeError;

module.exports = function (it) {
  var result = toIntegerOrInfinity(it);
  if (result < 0) throw new $RangeError("The argument can't be less than 0");
  return result;
};
