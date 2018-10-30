"use strict";

module.exports = function (t, a) {
	a(t(), 0, "No arguments");
	a(t(0, -0, 0), 0, "Zeros");
	a(t(4, NaN, Infinity), Infinity, "Infinity");
	a(t(4, NaN, -Infinity), Infinity, "Infinity");
	a(t(4, NaN, 34), NaN, "NaN");
	a(t(3, 4), 5, "#1");
	a(t(3, 4, 5), 7.0710678118654755, "#2");
};
