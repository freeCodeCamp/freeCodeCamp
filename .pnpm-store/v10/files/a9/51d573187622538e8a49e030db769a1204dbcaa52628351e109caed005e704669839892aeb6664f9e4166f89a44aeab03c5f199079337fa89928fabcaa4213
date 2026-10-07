// Thanks
// @rauchma http://www.2ality.com/2014/01/efficient-string-repeat.html
// @mathiasbynens https://github.com/mathiasbynens/String.prototype.repeat/blob/4a4b567def/repeat.js

"use strict";

var value     = require("../../../object/valid-value")
  , toInteger = require("../../../number/to-integer");

module.exports = function (count) {
	var str = String(value(this)), result;
	count = toInteger(count);
	if (count < 0) throw new RangeError("Count must be >= 0");
	if (!isFinite(count)) throw new RangeError("Count must be < ∞");

	result = "";
	while (count) {
		if (count % 2) result += str;
		if (count > 1) str += str;
		// eslint-disable-next-line no-bitwise
		count >>= 1;
	}
	return result;
};
