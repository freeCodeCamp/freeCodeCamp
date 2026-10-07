"use strict";

var isArray       = require("./array/is")
  , toShortString = require("./lib/to-short-string");

var objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;

var assign = function (target, source) {
	for (var key in source) {
		if (objPropertyIsEnumerable.call(source, key)) target[key] = source[key];
	}
};

module.exports = function (validationDatum1/*, ...validationDatumN, options */) {
	var validationData = [validationDatum1];
	var globalOptions;
	if (arguments.length > 1) {
		var hasOptions = !isArray(arguments[arguments.length - 1]);
		if (hasOptions) globalOptions = arguments[arguments.length - 1];
		var lastDatumIndex = hasOptions ? arguments.length - 2 : arguments.length - 1;
		for (var i = 1; i <= lastDatumIndex; ++i) validationData.push(arguments[i]);
	}
	var result = [], errors;
	for (var j = 0; j < validationData.length; ++j) {
		var validationDatum = validationData[j];
		var options = { name: validationDatum[0] };
		if (globalOptions) assign(options, globalOptions);
		if (validationDatum[3]) assign(options, validationDatum[3]);
		var resultItem;
		if (typeof validationDatum[2] !== "function") {
			throw new TypeError(toShortString(validationDatum[2]) + " is not a function");
		}
		try {
			resultItem = validationDatum[2](validationDatum[1], options);
		} catch (error) {
			if (!errors) errors = [];
			errors.push(error);
		}
		if (errors) continue;
		result.push(resultItem);
	}
	if (!errors) return result;

	if (errors.length === 1) throw errors[0];
	var ErrorConstructor = (globalOptions && globalOptions.Error) || TypeError;
	var errorMessage = "Approached following errors:";
	for (var k = 0; k < errors.length; ++k) {
		errorMessage += "\n - " + errors[k].message.split("\n").join("\n   ");
	}
	throw new ErrorConstructor(errorMessage);
};
