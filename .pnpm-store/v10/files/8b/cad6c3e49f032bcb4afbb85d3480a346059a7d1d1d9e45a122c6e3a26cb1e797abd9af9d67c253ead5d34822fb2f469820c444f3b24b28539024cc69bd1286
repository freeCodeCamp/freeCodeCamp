"use strict";

var isArrayLike = require("./is-array-like");

module.exports = function (obj) {
	if (isArrayLike(obj)) return obj;
	throw new TypeError(obj + " is not array-like value");
};
