"use strict";

var isToStringTagSupported = require("../lib/is-to-string-tag-supported")
  , isPrototype            = require("../prototype/is");

var regExpTest = RegExp.prototype.test
  , objectToString = Object.prototype.toString
  , objectTaggedString = objectToString.call(/a/);

module.exports = function (value) {
	if (!value) return false;

	// Sanity check (reject objects which do not expose common RegExp interface)
	if (!hasOwnProperty.call(value, "lastIndex")) return false;
	try {
		if (typeof value.lastIndex !== "number") return false;
		if (typeof value.test !== "function") return false;
		if (typeof value.exec !== "function") return false;
	} catch (error) {
		return false;
	}

	// Ensure its native RegExp object (has [[RegExpMatcher]] slot)
	if (isToStringTagSupported && typeof value[Symbol.toStringTag] === "string") {
		// Edge case (possibly a regExp with custom Symbol.toStringTag)
		try {
			var lastIndex = value.lastIndex;
			regExpTest.call(value, "");
			if (value.lastIndex !== lastIndex) value.lastIndex = lastIndex;
			return true;
		} catch (error) {
			return false;
		}
	}
	if (objectToString.call(value) !== objectTaggedString) return false;
	return !isPrototype(value);
};
