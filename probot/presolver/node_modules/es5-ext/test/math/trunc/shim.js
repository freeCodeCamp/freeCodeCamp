"use strict";

var is = require("../../../object/is");

module.exports = function (t, a) {
	a(t({}), NaN, "NaN");
	a(t(0), 0, "Zero");
	a(t(Infinity), Infinity, "Infinity");
	a(t(-Infinity), -Infinity, "-Infinity");
	a(is(t(0.234), 0), true, "0");
	a(is(t(-0.234), -0), true, "-0");
	a(t(13.7), 13, "Positive #1");
	a(t(12.3), 12, "Positive #2");
	a(t(-12.3), -12, "Negative #1");
	a(t(-14.7), -14, "Negative #2");
};
