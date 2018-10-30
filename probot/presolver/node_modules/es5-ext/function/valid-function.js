"use strict";

var isFunction = require("./is-function");

module.exports = function (value) {
	if (!isFunction(value)) throw new TypeError(value + " is not a function");
	return value;
};
