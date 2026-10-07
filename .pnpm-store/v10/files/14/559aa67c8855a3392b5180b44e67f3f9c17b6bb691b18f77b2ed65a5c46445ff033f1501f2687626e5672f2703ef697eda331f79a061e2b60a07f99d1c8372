// Taken from: https://github.com/paulmillr/es6-shim/

"use strict";

var toInteger         = require("../../../number/to-integer")
  , toPosInt          = require("../../../number/to-pos-integer")
  , validValue        = require("../../../object/valid-value")
  , objHasOwnProperty = Object.prototype.hasOwnProperty
  , max               = Math.max
  , min               = Math.min;

module.exports = function (target, start /*, end*/) {
	var arr = validValue(this)
	  , end = arguments[2]
	  , length = toPosInt(arr.length)
	  , to
	  , from
	  , fin
	  , count
	  , direction;

	target = toInteger(target);
	start = toInteger(start);
	end = end === undefined ? length : toInteger(end);

	to = target < 0 ? max(length + target, 0) : min(target, length);
	from = start < 0 ? max(length + start, 0) : min(start, length);
	fin = end < 0 ? max(length + end, 0) : min(end, length);
	count = min(fin - from, length - to);
	direction = 1;

	if (from < to && to < from + count) {
		direction = -1;
		from += count - 1;
		to += count - 1;
	}
	while (count > 0) {
		if (objHasOwnProperty.call(arr, from)) arr[to] = arr[from];
		else delete arr[from];
		from += direction;
		to += direction;
		count -= 1;
	}
	return arr;
};
