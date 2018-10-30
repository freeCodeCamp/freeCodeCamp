"use strict";

var toShortString = require("../to-short-string-representation")
  , isInteger     = require("./is-integer");

module.exports = function (num) {
	if (!isInteger(num)) throw new TypeError(toShortString(num) + " is not a integer");
	return Number(num);
};
