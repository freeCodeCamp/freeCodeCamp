"use strict";

var floor = Math.floor;

module.exports = function (value) {
	if (isNaN(value)) return NaN;
	value = Number(value);
	if (value === 0) return value;
	if (value === Infinity) return Infinity;
	if (value === -Infinity) return -Infinity;
	if (value > 0) return floor(value);
	return -floor(-value);
};
