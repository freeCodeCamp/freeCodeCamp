"use strict";

var safeToString = require("../safe-to-string")
  , isPromise    = require("./is-promise");

module.exports = function (value) {
	if (!isPromise(value)) throw new TypeError(safeToString(value) + " is not a promise");
	return value;
};
