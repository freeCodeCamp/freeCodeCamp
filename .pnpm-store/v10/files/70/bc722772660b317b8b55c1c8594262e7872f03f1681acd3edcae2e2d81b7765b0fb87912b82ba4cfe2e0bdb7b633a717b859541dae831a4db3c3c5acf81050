"use strict";

var resolveException = require("../lib/resolve-exception")
  , is               = require("./is");

module.exports = function (value/*, options*/) {
	if (is(value)) return value;
	var options = arguments[1];
	var errorMessage =
		options && options.name ? "Expected an object for %n, received %v" : "%v is not an object";
	return resolveException(value, errorMessage, options);
};
