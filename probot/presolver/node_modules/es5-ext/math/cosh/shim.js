"use strict";

var exp = Math.exp;

module.exports = function (value) {
	if (isNaN(value)) return NaN;
	value = Number(value);
	if (value === 0) return 1;
	if (!isFinite(value)) return Infinity;
	return (exp(value) + exp(-value)) / 2;
};
