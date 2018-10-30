"use strict";

var isNatural     = require("../number/is-natural")
  , toShortString = require("../to-short-string-representation");

module.exports = function (arg) {
	var num = Number(arg);
	if (!isNatural(num)) throw new TypeError(toShortString(arg) + " is not a natural number");
	return num;
};
