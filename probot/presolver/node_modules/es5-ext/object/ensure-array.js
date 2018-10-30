"use strict";

var toShortString = require("../to-short-string-representation")
  , isArray       = require("./is-array-like");

module.exports = function (value) {
	if (isArray(value)) return value;
	throw new TypeError(toShortString(value) + " is not a array");
};
