"use strict";

var resolveException = require("../lib/resolve-exception")
  , coerce           = require("./coerce");

module.exports = function (value/*, options*/) {
	var coerced = coerce(value);
	if (coerced !== null) return coerced;
	var options = arguments[1];
	var errorMessage =
		options && options.name
			? "Expected an array length for %n, received %v"
			: "%v is not an array length";
	return resolveException(value, errorMessage, options);
};
