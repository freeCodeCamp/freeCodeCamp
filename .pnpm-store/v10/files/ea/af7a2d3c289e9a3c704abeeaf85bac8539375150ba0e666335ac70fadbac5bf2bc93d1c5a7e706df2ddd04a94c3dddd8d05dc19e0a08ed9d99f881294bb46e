"use strict";

var resolveException = require("../resolve-exception");

module.exports = function (value, coerced, options) {
	if (coerced >= options.min) return coerced;
	var errorMessage =
		options && options.name
			? "Expected %n to be greater or equal " + options.min + ", received %v"
			: "%v is not greater or equal " + options.min;
	return resolveException(value, errorMessage, options);
};
