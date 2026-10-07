"use strict";

var safeToString = require("../safe-to-string")
  , isThenable   = require("./is-thenable");

module.exports = function (value) {
	if (!isThenable(value)) throw new TypeError(safeToString(value) + " is not a thenable");
	return value;
};
