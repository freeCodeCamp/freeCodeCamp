"use strict";

var safeToString = require("../safe-to-string")
  , toInteger    = require("../number/to-integer")
  , isTimeValue  = require("./is-time-value");

module.exports = function (value) {
	if (isTimeValue(value)) return toInteger(value);
	throw new TypeError(safeToString(value) + " is not a valid time value");
};
