"use strict";

module.exports = function (t, a) {
	a(t({}), NaN, "NaN");
	a(t(0), 0, "Zero");
	a(t(Infinity), Infinity, "Infinity");
	a(t(-Infinity), -Infinity, "-Infinity");
	a(t(-1), -1, "-1");
	a(t(1), 1, "1");
	a(t(2), 1.2599210498948732, "Ohter");
};
