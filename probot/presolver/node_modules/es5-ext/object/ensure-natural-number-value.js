"use strict";

var isNaturalValue = require("./is-natural-number-value")
  , toShortString  = require("../to-short-string-representation");

module.exports = function (arg) {
	var num = Number(arg);
	if (!isNaturalValue(arg)) throw new TypeError(toShortString(arg) + " is not a natural number");
	return num;
};
