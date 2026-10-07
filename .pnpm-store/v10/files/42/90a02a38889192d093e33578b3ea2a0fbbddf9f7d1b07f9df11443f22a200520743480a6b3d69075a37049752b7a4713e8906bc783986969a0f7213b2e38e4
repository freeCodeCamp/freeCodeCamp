"use strict";

var indexOf = require("./e-index-of");

module.exports = function (value /*, fromIndex*/) {
	var result = [], i, fromIndex = arguments[1];
	while ((i = indexOf.call(this, value, fromIndex)) !== -1) {
		result.push(i);
		fromIndex = i + 1;
	}
	return result;
};
