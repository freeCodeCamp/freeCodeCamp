"use strict";

module.exports = function (t, a) {
	a(t("arar"), false, "String");
	a(t(12), true, "Number in range");
	a(t(true), true, "Boolean");
	a(t(new Date()), true, "Date");
	a(t({}), false, "Plain object");
	a(t(NaN), false, "NaN");
	a(t(Infinity), false, "Infinity");
	a(t(8.64e17), false, "Beyond range");
	a(t(8.64e15), true, "Below range");
	a(t(-8.64e17), false, "Negative beyond range");
	a(t(-8.64e15), true, "Negative below range");
};
