// Polyfills friendly, therefore ES5 syntax

"use strict";

var isObject = require("../object/is");

var iteratorSymbol = Symbol.iterator;

if (!iteratorSymbol) {
	throw new Error("Cannot initialize iterator/is due to Symbol.iterator not being implemented");
}

module.exports = function (value/*, options*/) {
	var options = arguments[1];
	if (!isObject(value)) {
		if (!isObject(options) || !options.allowString || typeof value !== "string") return false;
	}
	try {
		if (typeof value[iteratorSymbol] !== "function") return false;
	} catch (error) {
		return false;
	}
	if (!options) return true;
	if (options.denyEmpty) {
		try {
			if (value[iteratorSymbol]().next().done) return false;
		} catch (error) {
			return false;
		}
	}
	return true;
};
