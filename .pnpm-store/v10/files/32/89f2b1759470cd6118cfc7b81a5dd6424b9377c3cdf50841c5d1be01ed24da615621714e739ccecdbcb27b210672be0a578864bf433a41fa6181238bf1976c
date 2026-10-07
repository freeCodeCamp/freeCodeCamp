"use strict";

var resolveException = require("../lib/resolve-exception")
  , coerce           = require("./coerce");

module.exports = function (value/*, options*/) {
	var coerced = coerce(value);
	if (coerced !== null) return coerced;
	return resolveException(value, "%v is not a number", arguments[1]);
};
