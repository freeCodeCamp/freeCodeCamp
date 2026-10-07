"use strict";

var coerceToNumber = require("../number/coerce");

module.exports = function (value) {
	value = coerceToNumber(value);
	return isFinite(value) ? value : null;
};
