"use strict";

var toPosInt = require("../../number/to-pos-integer")
  , callable = require("../../object/valid-callable")
  , value    = require("../../object/valid-value")
  , floor    = Math.floor;

module.exports = function (compareFn) {
	var length, low, high, middle;

	value(this);
	callable(compareFn);

	length = toPosInt(this.length);
	low = 0;
	high = length - 1;

	while (low <= high) {
		middle = floor((low + high) / 2);
		if (compareFn(this[middle]) < 0) high = middle - 1;
		else low = middle + 1;
	}

	if (high < 0) return 0;
	if (high >= length) return length - 1;
	return high;
};
