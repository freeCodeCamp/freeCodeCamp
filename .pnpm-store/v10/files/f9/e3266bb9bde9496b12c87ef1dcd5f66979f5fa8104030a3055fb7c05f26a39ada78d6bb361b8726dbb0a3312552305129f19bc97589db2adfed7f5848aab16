"use strict";

var resolveException    = require("../lib/resolve-exception")
  , resolveErrorMessage = require("../lib/resolve-error-message")
  , ensurePlainFunction = require("../plain-function/ensure")
  , ensureArray         = require("../array/ensure")
  , is                  = require("./is");

var objHasOwnProperty = Object.prototype.hasOwnProperty, invalidItemsLimit = 3;

module.exports = function (value/*, options*/) {
	var options = arguments[1];
	var mainErrorMessage =
		options && options.name
			? "Expected a plain object for %n, received %v"
			: "%v is not a plain object";
	if (!is(value)) return resolveException(value, mainErrorMessage, options);
	if (!options) return value;

	var invalidKeys, key, errorMessage;
	var allowedKeys = ensureArray(options.allowedKeys, { isOptional: true });
	if (allowedKeys) {
		for (key in value) {
			if (!objHasOwnProperty.call(value, key)) continue;
			if (allowedKeys.indexOf(key) > -1) continue;
			if (!invalidKeys) invalidKeys = [];
			if (invalidKeys.push(key) === invalidItemsLimit) break;
		}
		if (invalidKeys) {
			errorMessage =
				resolveErrorMessage(mainErrorMessage, value, options) +
				".\n           Following keys are unexpected: " +
				invalidKeys.join(", ");
			throw new TypeError(errorMessage);
		}
	}

	var ensurePropertyValue = ensurePlainFunction(options.ensurePropertyValue, {
		isOptional: true
	});
	if (ensurePropertyValue) {
		var coercedValue = {};
		for (key in value) {
			if (!objHasOwnProperty.call(value, key)) continue;
			var coercedPropertyValue;
			try {
				coercedPropertyValue = ensurePropertyValue(value[key]);
			} catch (error) {
				if (!invalidKeys) invalidKeys = [];
				if (invalidKeys.push(key) === invalidItemsLimit) break;
			}
			if (invalidKeys) continue;
			coercedValue[key] = coercedPropertyValue;
		}
		if (invalidKeys) {
			errorMessage =
				resolveErrorMessage(mainErrorMessage, value, options) +
				".\n           Values for following keys are invalid: " +
				invalidKeys.join(", ");
			throw new TypeError(errorMessage);
		}

		return coercedValue;
	}

	return value;
};
