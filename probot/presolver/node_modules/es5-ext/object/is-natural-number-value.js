"use strict";

var isNaturalNumber = require("./is-natural-number")
  , isValue         = require("./is-value");

module.exports = function (arg) {
	if (!isValue(arg)) return false;
	return isNaturalNumber(arg);
};
