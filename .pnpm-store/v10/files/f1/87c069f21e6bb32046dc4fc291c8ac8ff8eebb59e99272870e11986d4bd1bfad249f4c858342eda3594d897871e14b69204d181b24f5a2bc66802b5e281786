"use strict";

var resolveException = require("../lib/resolve-exception")
  , isValue          = require("../value/is")
  , is               = require("./is");

var resolveCoercedValue = function (value, coerceItem) {
	var coercedValue = [];
	var iterator = value[Symbol.iterator]();
	var item;
	while (!(item = iterator.next()).done) {
		var newItemValue = coerceItem(item.value);
		if (!isValue(newItemValue)) throw new Error("Stop propagation");
		coercedValue.push(newItemValue);
	}
	return coercedValue;
};
module.exports = function (value/*, options*/) {
	var options = arguments[1];
	if (is(value, options)) {
		if (!options) return value;
		if (typeof options.coerceItem !== "function") return value;
		try { return resolveCoercedValue(value, options.coerceItem); }
		catch (error) {
			// Ignore, let validation error propagate
		}
	}
	return resolveException(value, "%v is not expected iterable value", options);
};
