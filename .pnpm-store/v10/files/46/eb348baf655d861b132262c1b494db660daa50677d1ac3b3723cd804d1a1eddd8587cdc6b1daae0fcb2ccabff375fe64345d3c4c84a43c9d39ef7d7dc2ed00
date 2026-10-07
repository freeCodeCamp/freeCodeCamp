// Thanks: https://github.com/monolithed/ECMAScript-6

"use strict";

var exp = Math.exp;

module.exports = function (value) {
	if (isNaN(value)) return NaN;
	value = Number(value);
	if (value === 0) return value;
	if (value === Infinity) return Infinity;
	if (value === -Infinity) return -1;

	if (value > -1.0e-6 && value < 1.0e-6) return value + (value * value) / 2;
	return exp(value) - 1;
};
