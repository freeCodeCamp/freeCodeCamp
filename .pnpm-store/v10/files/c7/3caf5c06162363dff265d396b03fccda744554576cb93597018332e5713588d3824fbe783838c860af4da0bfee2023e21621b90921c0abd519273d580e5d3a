"use strict";

var coerceToInteger = require("../integer/coerce");

var abs = Math.abs;

module.exports = function (value) {
	value = coerceToInteger(value);
	if (!value) return value;
	if (abs(value) > 8.64e15) return null;
	return value;
};
