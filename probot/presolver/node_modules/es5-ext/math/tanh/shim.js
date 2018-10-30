"use strict";

var exp = Math.exp;

module.exports = function (value) {
	var num1, num2;
	if (isNaN(value)) return NaN;
	value = Number(value);
	if (value === 0) return value;
	if (value === Infinity) return 1;
	if (value === -Infinity) return -1;
	num1 = exp(value);
	if (num1 === Infinity) return 1;
	num2 = exp(-value);
	if (num2 === Infinity) return -1;
	return (num1 - num2) / (num1 + num2);
};
