"use strict";

var log = Math.log, sqrt = Math.sqrt;

module.exports = function (value) {
	if (isNaN(value)) return NaN;
	value = Number(value);
	if (value === 0) return value;
	if (!isFinite(value)) return value;
	if (value < 0) {
		value = -value;
		return -log(value + sqrt(value * value + 1));
	}
	return log(value + sqrt(value * value + 1));
};
