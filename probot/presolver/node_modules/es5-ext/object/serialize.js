"use strict";

var toArray  = require("./to-array")
  , isDate   = require("../date/is-date")
  , isValue  = require("../object/is-value")
  , isRegExp = require("../reg-exp/is-reg-exp");

var isArray = Array.isArray
  , stringify = JSON.stringify
  , objHasOwnProperty = Object.prototype.hasOwnProperty;
var keyValueToString = function (value, key) {
	return stringify(key) + ":" + exports(value);
};

var sparseMap = function (arr) {
	var i, length = arr.length, result = new Array(length);
	for (i = 0; i < length; ++i) {
		if (!objHasOwnProperty.call(arr, i)) continue;
		result[i] = exports(arr[i]);
	}
	return result;
};

module.exports = exports = function (obj) {
	if (!isValue(obj)) return String(obj);
	switch (typeof obj) {
		case "string":
			return stringify(obj);
		case "number":
		case "boolean":
		case "function":
			return String(obj);
		case "object":
			if (isArray(obj)) return "[" + sparseMap(obj) + "]";
			if (isRegExp(obj)) return String(obj);
			if (isDate(obj)) return "new Date(" + obj.valueOf() + ")";
			return "{" + toArray(obj, keyValueToString) + "}";
		default:
			throw new TypeError("Serialization of " + String(obj) + "is unsupported");
	}
};
