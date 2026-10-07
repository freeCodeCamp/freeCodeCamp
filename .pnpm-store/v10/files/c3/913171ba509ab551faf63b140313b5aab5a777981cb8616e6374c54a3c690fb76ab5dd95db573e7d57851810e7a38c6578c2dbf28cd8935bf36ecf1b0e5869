"use strict";

var log = Math.log;

module.exports = function (value) {
	if (isNaN(value)) return NaN;
	value = Number(value);
	if (value < -1) return NaN;
	if (value > 1) return NaN;
	if (value === -1) return -Infinity;
	if (value === 1) return Infinity;
	if (value === 0) return value;
	return 0.5 * log((1 + value) / (1 - value));
};
