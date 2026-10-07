"use strict";

var isObject            = require("type/object/is")
  , ensureNaturalNumber = require("type/natural-number/ensure")
  , ensureString        = require("type/string/ensure");

var generated = Object.create(null), random = Math.random, uniqTryLimit = 100;

var getChunk = function () { return random().toString(36).slice(2); };

var getString = function (length, charset) {
	var str;
	if (charset) {
		var charsetLength = charset.length;
		str = "";
		for (var i = 0; i < length; ++i) {
			str += charset.charAt(Math.floor(Math.random() * charsetLength));
		}
		return str;
	}
	str = getChunk();
	if (length === null) return str;
	while (str.length < length) str += getChunk();
	return str.slice(0, length);
};

module.exports = function (/* options */) {
	var options = arguments[0];
	if (!isObject(options)) options = {};
	var length = ensureNaturalNumber(options.length, { "default": 10 })
	  , isUnique = options.isUnique
	  , charset = ensureString(options.charset, { isOptional: true });

	var str = getString(length, charset);
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
