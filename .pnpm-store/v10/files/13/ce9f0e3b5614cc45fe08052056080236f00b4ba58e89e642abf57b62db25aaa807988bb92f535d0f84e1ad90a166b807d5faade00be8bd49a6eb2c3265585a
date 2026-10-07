"use strict";

var isRegExp = require("./is-reg-exp");

module.exports = function (value) {
	if (!isRegExp(value)) throw new TypeError(value + " is not a RegExp object");
	return value;
};
