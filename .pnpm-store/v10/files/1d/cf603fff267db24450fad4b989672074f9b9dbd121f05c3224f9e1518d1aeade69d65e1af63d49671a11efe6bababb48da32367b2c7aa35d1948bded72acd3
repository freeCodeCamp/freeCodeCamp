"use strict";

var coerceToFinite = require("../finite/coerce");

var abs = Math.abs, floor = Math.floor;

module.exports = function (value) {
	value = coerceToFinite(value);
	if (!value) return value;
	return (value > 0 ? 1 : -1) * floor(abs(value));
};
