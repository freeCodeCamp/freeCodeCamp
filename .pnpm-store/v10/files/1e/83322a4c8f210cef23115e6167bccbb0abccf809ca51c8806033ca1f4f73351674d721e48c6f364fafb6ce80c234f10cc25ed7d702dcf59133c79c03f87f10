"use strict";

var resolveException    = require("../lib/resolve-exception")
  , resolveErrorMessage = require("../lib/resolve-error-message")
  , toShortString       = require("../lib/to-short-string")
  , ensurePlainFunction = require("../plain-function/ensure")
  , is                  = require("./is");

var objHasOwnProperty = Object.prototype.hasOwnProperty, invalidItemsLimit = 3;

module.exports = function (value /*, options*/) {
	var options = arguments[1];
	var mainErrorMessage =
		options && options.name ? "Expected an array for %n, received %v" : "%v is not an array";
	if (!is(value)) return resolveException(value, mainErrorMessage, options);
	if (!options) return value;

	var ensureItem = ensurePlainFunction(options.ensureItem, { isOptional: true });
	if (ensureItem) {
		var coercedValue = [], invalidItems;
		for (var index = 0, length = value.length; index < length; ++index) {
			if (!objHasOwnProperty.call(value, index)) continue;
			var coercedItem;
			try {
				coercedItem = ensureItem(value[index]);
			} catch (error) {
				if (!invalidItems) invalidItems = [];
				if (invalidItems.push(toShortString(value[index])) === invalidItemsLimit) break;
			}
			if (invalidItems) continue;
			coercedValue[index] = coercedItem;
		}
		if (invalidItems) {
			throw new TypeError(
				resolveErrorMessage(mainErrorMessage, value, options) +
					".\n           Following items are invalid: " +
					invalidItems.join(", ")
			);
		}
		return coercedValue;
	}
	return value;
};
