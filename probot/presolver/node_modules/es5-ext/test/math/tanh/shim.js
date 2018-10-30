"use strict";

module.exports = function (t, a) {
	a(t({}), NaN, "NaN");
	a(t(0), 0, "Zero");
	a(t(Infinity), 1, "Infinity");
	a(t(-Infinity), -1, "-Infinity");
	a(t(1), 0.7615941559557649, "1");
	a(t(Number.MAX_VALUE), 1);
	a(t(-Number.MAX_VALUE), -1);
};
