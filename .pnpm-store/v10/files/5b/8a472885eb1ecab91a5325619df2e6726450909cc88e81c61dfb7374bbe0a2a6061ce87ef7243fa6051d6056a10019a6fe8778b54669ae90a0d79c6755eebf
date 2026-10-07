"use strict";

var coerceToArrayLength = require("../array-length/coerce")
  , isObject            = require("../object/is");

module.exports = function (value/*, options*/) {
	if (!isObject(value)) {
		var options = arguments[1];
		if (isObject(options) && options.allowString && typeof value === "string") return true;
		return false;
	}

	if (typeof value === "function") return false;

	var length;
	try { length = value.length; }
	catch (error) { return false; }

	if (coerceToArrayLength(length) === null) return false;
	return true;
};
