"use strict";

var resolveException = require("../lib/resolve-exception")
  , is               = require("./is");

module.exports = function (value/*, options*/) {
	if (is(value)) return value;
	return resolveException(value, "%v is not a function", arguments[1]);
};
