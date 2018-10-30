"use strict";

module.exports = function (t, a) {
	a(t({}), NaN, "NaN");
	a(t(-1.5), NaN, "Less than -1");
	a(t(-1), -Infinity, "-1");
	a(t(0), 0, "0");
	a(t(Infinity), Infinity, "Infinity");
	a(t(1), 0.6931471805599453, "Other");
};
