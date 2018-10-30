"use strict";

var log = Math.log, LOG2E = Math.LOG2E;

module.exports = function (value) {
	if (isNaN(value)) return NaN;
	value = Number(value);
	if (value < 0) return NaN;
	if (value === 0) return -Infinity;
	if (value === 1) return 0;
	if (value === Infinity) return Infinity;

	return log(value) * LOG2E;
};
