// Based on: https://github.com/mathiasbynens/String.prototype.codePointAt
// Thanks @mathiasbynens !

"use strict";

var toInteger  = require("../../../number/to-integer")
  , validValue = require("../../../object/valid-value");

module.exports = function (pos) {
	var str = String(validValue(this)), length = str.length, first, second;
	pos = toInteger(pos);

	// Account for out-of-bounds indices:
	if (pos < 0 || pos >= length) return undefined;

	// Get the first code unit
	first = str.charCodeAt(pos);
	if (first >= 0xd800 && first <= 0xdbff && length > pos + 1) {
		second = str.charCodeAt(pos + 1);
		if (second >= 0xdc00 && second <= 0xdfff) {
			// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
			return (first - 0xd800) * 0x400 + second - 0xdc00 + 0x10000;
		}
	}
	return first;
};
