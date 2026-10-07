"use strict";

var isFunction     = require("../../function/is-function")
  , slice          = Array.prototype.slice
  , defineProperty = Object.defineProperty
  , desc           = { configurable: true, enumerable: true, writable: true, value: null };

module.exports = function (/* …items*/) {
	var result, i, length;
	if (!this || this === Array || !isFunction(this)) return slice.call(arguments);
	result = new this((length = arguments.length));
	for (i = 0; i < length; ++i) {
		desc.value = arguments[i];
		defineProperty(result, i, desc);
	}
	desc.value = null;
	result.length = length;
	return result;
};
