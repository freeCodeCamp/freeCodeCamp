"use strict";

var log = Math.log, sqrt = Math.sqrt;

module.exports = function (value) {
	if (isNaN(value)) return NaN;
	value = Number(value);
	if (value < 1) return NaN;
	if (value === 1) return 0;
	if (value === Infinity) return value;
	return log(value + sqrt(value * value - 1));
};
