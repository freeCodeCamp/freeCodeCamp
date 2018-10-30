"use strict";

module.exports = function (t, a) {
	a(t({}), NaN, "NaN");
	a(t(0), 0, "Zero");
	a(t(Infinity), Infinity, "Infinity");
	a(t(-Infinity), -Infinity, "-Infinity");
	a(t(1), 1.1752011936438014, "1");
	a(t(Number.MAX_VALUE), Infinity);
	a(t(-Number.MAX_VALUE), -Infinity);
	a(t(Number.MIN_VALUE), 5e-324);
	a(t(-Number.MIN_VALUE), -5e-324);
};
