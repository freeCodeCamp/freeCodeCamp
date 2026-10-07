"use strict";

var resolveException = require("../lib/resolve-exception")
  , is               = require("./is");

module.exports = function (value/*, options*/) {
	if (is(value, arguments[1])) return value;
	return resolveException(value, "%v is not an array like value", arguments[1]);
};
