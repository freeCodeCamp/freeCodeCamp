"use strict";

var resolveException = require("../lib/resolve-exception")
  , coerce           = require("./coerce");

module.exports = function (value/*, options*/) {
	var coerced = coerce(value);
	if (coerced !== null) return coerced;
	var options = arguments[1];
	var errorMessage =
		options && options.name ? "Expected a number for %n, received %v" : "%v is not a number";
	return resolveException(value, errorMessage, options);
};
