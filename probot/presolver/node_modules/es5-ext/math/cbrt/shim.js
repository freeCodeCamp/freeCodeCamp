"use strict";

var pow = Math.pow;

module.exports = function (value) {
	if (isNaN(value)) return NaN;
	value = Number(value);
	if (value === 0) return value;
	if (!isFinite(value)) return value;
	if (value < 0) return -pow(-value, 1 / 3);
	return pow(value, 1 / 3);
};
