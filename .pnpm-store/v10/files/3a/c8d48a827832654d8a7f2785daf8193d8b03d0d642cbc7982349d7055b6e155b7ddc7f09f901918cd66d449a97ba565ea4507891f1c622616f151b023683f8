"use strict";

var resolveException = require("../lib/resolve-exception")
  , is               = require("./is");

module.exports = function (value /*, options*/) {
	if (is(value)) return value;
	var options = arguments[1];
	var errorMessage =
		options && options.name ? "Expected a set for %n, received %v" : "%v is not a set";
	return resolveException(value, errorMessage, options);
};
