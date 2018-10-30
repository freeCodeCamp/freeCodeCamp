"use strict";

var isValue = require("./object/is-value");

var slice = Array.prototype.slice;

// eslint-disable-next-line no-unused-vars
module.exports = function (value, propertyName1 /*, …propertyNamen*/) {
	var propertyNames = slice.call(arguments, 1), index = 0, length = propertyNames.length;
	while (isValue(value) && index < length) value = value[propertyNames[index++]];
	return index === length ? value : undefined;
};
