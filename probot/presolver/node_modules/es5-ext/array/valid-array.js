"use strict";

var isArray = Array.isArray;

module.exports = function (value) {
	if (isArray(value)) return value;
	throw new TypeError(value + " is not an array");
};
