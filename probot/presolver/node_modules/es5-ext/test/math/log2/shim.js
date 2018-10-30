"use strict";

module.exports = function (t, a) {
	a(t({}), NaN, "NaN");
	a(t(-0.5), NaN, "Less than 0");
	a(t(0), -Infinity, "0");
	a(t(1), 0, "1");
	a(t(Infinity), Infinity, "Infinity");
	a(t(3).toFixed(15), "1.584962500721156", "Other");
};
