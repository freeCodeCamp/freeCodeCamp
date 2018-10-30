"use strict";

module.exports = function (t, a) {
	a(t({}), NaN, "NaN");
	a(t(0), 0, "Zero");
	a(t(Infinity), Infinity, "Infinity");
	a(t(-Infinity), -1, "-Infinity");
	a(t(1).toFixed(15), "1.718281828459045", "1");
};
