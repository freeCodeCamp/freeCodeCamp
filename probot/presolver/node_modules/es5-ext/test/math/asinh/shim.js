"use strict";

module.exports = function (t, a) {
	a(t({}), NaN, "NaN");
	a(t(0), 0, "Zero");
	a(t(Infinity), Infinity, "Infinity");
	a(t(-Infinity), -Infinity, "-Infinity");
	a(t(-2), -1.4436354751788103, "Negative");
	a(t(2), 1.4436354751788103, "Positive");
};
