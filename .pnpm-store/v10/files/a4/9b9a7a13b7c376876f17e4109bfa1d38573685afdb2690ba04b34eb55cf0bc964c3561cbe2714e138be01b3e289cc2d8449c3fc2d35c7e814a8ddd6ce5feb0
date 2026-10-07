"use strict";

var isValue = require("../value/is");

module.exports = function (value) {
	if (!isValue(value)) return null;
	try {
		value = +value; // Ensure implicit coercion
	} catch (error) {
		return null;
	}
	if (isNaN(value)) return null;
	return value;
};
