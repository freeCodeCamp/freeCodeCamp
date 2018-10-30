"use strict";

var isInteger = require("../number/is-integer")
  , isValue   = require("./is-value");

module.exports = function (arg) {
	if (!isValue(arg)) return false;
	arg = Number(arg);
	return isInteger(arg);
};
