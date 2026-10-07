// Taken from: https://github.com/paulmillr/es6-shim/

"use strict";

var toInteger  = require("../../../number/to-integer")
  , toPosInt   = require("../../../number/to-pos-integer")
  , validValue = require("../../../object/valid-value")
  , max        = Math.max
  , min        = Math.min;

module.exports = function (value /*, start, end*/) {
	var arr = validValue(this)
	  , start = arguments[1]
	  , end = arguments[2]
	  , length = toPosInt(arr.length)
	  , relativeStart
	  , i;

	start = start === undefined ? 0 : toInteger(start);
	end = end === undefined ? length : toInteger(end);

	relativeStart = start < 0 ? max(length + start, 0) : min(start, length);
	for (i = relativeStart; i < length && i < end; ++i) arr[i] = value;
	return arr;
};
