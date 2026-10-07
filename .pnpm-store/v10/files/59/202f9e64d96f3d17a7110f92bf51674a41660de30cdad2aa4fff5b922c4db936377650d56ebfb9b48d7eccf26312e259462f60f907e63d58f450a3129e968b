"use strict";

var safeToString    = require("../safe-to-string")
  , isPlainFunction = require("./is-plain-function");

module.exports = function (value) {
	if (!isPlainFunction(value)) {
		throw new TypeError(safeToString(value) + " is not a plain function");
	}
	return value;
};
