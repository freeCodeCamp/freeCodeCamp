// Credit:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// #Decimal_rounding

"use strict";

var isValue       = require("../object/is-value")
  , ensureInteger = require("../object/ensure-integer");

var split = String.prototype.split;

module.exports = function (type) {
	return function (value/*, exp*/) {
		value = Number(value);
		var exp = arguments[1];
		if (isValue(exp)) exp = ensureInteger(exp);
		if (!value) return value;
		if (!exp) return Math[type](value);
		if (!isFinite(value)) return value;

		// Shift
		var tokens = split.call(value, "e");
		value = Math[type](tokens[0] + "e" + ((tokens[1] || 0) - exp));

		// Shift back
		tokens = value.toString().split("e");
		return Number(tokens[0] + "e" + (Number(tokens[1] || 0) + exp));
	};
};
