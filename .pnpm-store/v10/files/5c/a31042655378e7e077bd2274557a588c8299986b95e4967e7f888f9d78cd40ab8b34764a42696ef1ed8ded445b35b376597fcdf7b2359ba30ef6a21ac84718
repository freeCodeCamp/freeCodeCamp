"use strict";

var safeToString  = require("../safe-to-string")
  , isPlainObject = require("./is-plain-object");

module.exports = function (value) {
	if (!isPlainObject(value)) throw new TypeError(safeToString(value) + " is not a plain object");
	return value;
};
