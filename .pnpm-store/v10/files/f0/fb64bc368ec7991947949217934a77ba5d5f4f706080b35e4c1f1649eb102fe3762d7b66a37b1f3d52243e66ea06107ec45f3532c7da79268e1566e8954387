"use strict";

var resolveException    = require("../lib/resolve-exception")
  , resolveErrorMessage = require("../lib/resolve-error-message")
  , toShortString       = require("../lib/to-short-string")
  , ensurePlainFunction = require("../plain-function/ensure")
  , is                  = require("./is");

var invalidItemsLimit = 3;

module.exports = function (value/*, options*/) {
	var options = arguments[1];
	var mainErrorMessage =
		options && options.name
			? "Expected an iterable for %n, received %v"
			: "%v is not expected iterable";
	if (!is(value, options)) return resolveException(value, mainErrorMessage, options);
	if (!options) return value;

	var ensureItem = ensurePlainFunction(options.ensureItem, { isOptional: true });
	if (ensureItem) {
		var coercedValue = [];
		var iterator = value[Symbol.iterator]();
		var item, invalidItems;
		while (!(item = iterator.next()).done) {
			var newItemValue;
			try {
				newItemValue = ensureItem(item.value);
			} catch (error) {
				if (!invalidItems) invalidItems = [];
				if (invalidItems.push(item.value) === invalidItemsLimit) break;
			}
			if (invalidItems) continue;
			coercedValue.push(newItemValue);
		}
		if (invalidItems) {
			var errorMessage =
				resolveErrorMessage(mainErrorMessage, value, options) +
				".\n           Following items are invalid:";
			for (var i = 0; i < invalidItems.length; ++i) {
				errorMessage += "\n             - " + toShortString(invalidItems[i]);
			}
			throw new TypeError(errorMessage);
		}
		return coercedValue;
	}

	return value;
};
