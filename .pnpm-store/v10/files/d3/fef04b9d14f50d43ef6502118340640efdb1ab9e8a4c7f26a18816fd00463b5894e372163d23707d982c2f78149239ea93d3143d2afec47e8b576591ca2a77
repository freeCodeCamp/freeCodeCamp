"use strict";

var isFiniteNumber = require("./is-finite-number")
  , safeToString   = require("../safe-to-string");

module.exports = function (value) {
	if (isFiniteNumber(value)) return Number(value);
	throw new TypeError(safeToString(value) + " does not represent a finite number value");
};
