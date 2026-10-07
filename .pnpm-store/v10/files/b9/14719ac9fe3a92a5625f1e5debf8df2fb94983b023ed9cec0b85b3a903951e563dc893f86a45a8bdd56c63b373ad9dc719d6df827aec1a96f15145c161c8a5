"use strict";

var resolveException = require("../lib/resolve-exception")
  , coerce           = require("./coerce");

module.exports = function (value/*, options*/) {
	var coerced = coerce(value);
	if (coerced !== null) return coerced;
	var options = arguments[1];
	var errorMessage =
		options && options.name
			? "Expected a time value for %n, received %v"
			: "%v is not a time value";
	return resolveException(value, errorMessage, options);
};
