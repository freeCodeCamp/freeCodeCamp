"use strict";

var toInteger         = require("../../../number/to-integer")
  , toPosInt          = require("../../../number/to-pos-integer")
  , isPlainArray      = require("../../is-plain-array")
  , isArray           = Array.isArray
  , slice             = Array.prototype.slice
  , objHasOwnProperty = Object.prototype.hasOwnProperty
  , max               = Math.max;

module.exports = function (start, end) {
	var length, result, i;
	if (!this || !isArray(this) || isPlainArray(this)) {
		return slice.apply(this, arguments);
	}
	length = toPosInt(this.length);
	start = toInteger(start);
	if (start < 0) start = max(length + start, 0);
	else if (start > length) start = length;
	if (end === undefined) {
		end = length;
	} else {
		end = toInteger(end);
		if (end < 0) end = max(length + end, 0);
		else if (end > length) end = length;
	}
	if (start > end) start = end;
	result = new this.constructor(end - start);
	i = 0;
	while (start !== end) {
		if (objHasOwnProperty.call(this, start)) result[i] = this[start];
		++i;
		++start;
	}
	return result;
};
