"use strict";

var strCompare = require("../string/#/case-insensitive-compare")
  , isObject   = require("./is-object")
  , isValue    = require("./is-value")
  , numIsNaN   = require("../number/is-nan")
  , resolve
  , typeMap;

typeMap = {
	undefined: 0,
	object: 1,
	boolean: 2,
	string: 3,
	number: 4
};

resolve = function (a) {
	if (isObject(a)) {
		if (typeof a.valueOf !== "function") return NaN;
		a = a.valueOf();
		if (isObject(a)) {
			if (typeof a.toString !== "function") return NaN;
			a = a.toString();
			if (typeof a !== "string") return NaN;
		}
	}
	return a;
};

module.exports = function (val1, val2) {
	if (val1 === val2) return 0; // Same

	val1 = resolve(val1);
	val2 = resolve(val2);
	// eslint-disable-next-line eqeqeq
	if (val1 == val2) return typeMap[typeof val1] - typeMap[typeof val2];
	if (!isValue(val1)) return -1;
	if (!isValue(val2)) return 1;
	if (typeof val1 === "string" || typeof val2 === "string") {
		return strCompare.call(val1, val2);
	}
	if (numIsNaN(val1) && numIsNaN(val2)) return 0; // Jslint: ignore
	return Number(val1) - Number(val2);
};
