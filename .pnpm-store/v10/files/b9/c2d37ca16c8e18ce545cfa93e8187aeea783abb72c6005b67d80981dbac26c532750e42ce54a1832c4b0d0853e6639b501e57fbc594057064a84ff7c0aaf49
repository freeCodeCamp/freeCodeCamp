"use strict";

var isValue         = require("../object/is-value")
  , toNaturalNumber = require("../number/to-pos-integer");

var generated = Object.create(null), random = Math.random, uniqTryLimit = 100;

var getChunk = function () { return random().toString(36).slice(2); };

var getString = function (/* length */) {
	var str = getChunk(), length = arguments[0];
	if (!isValue(length)) return str;
	while (str.length < length) str += getChunk();
	return str.slice(0, length);
};

module.exports = function (/* options */) {
	var options = Object(arguments[0]), length = options.length, isUnique = options.isUnique;

	if (isValue(length)) length = toNaturalNumber(length);

	var str = getString(length);
	if (isUnique) {
		var count = 0;
		while (generated[str]) {
			if (++count === uniqTryLimit) {
				throw new Error(
					"Cannot generate random string.\n" +
						"String.random is not designed to effectively generate many short and " +
						"unique random strings"
				);
			}
			str = getString(length);
		}
		generated[str] = true;
	}
	return str;
};
