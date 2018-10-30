"use strict";

module.exports = function (t, a) {
	a(t(undefined), false, "Undefined");
	a(t(null), false, "Null");
	a(t(0), true, "Zero");
	a(t(NaN), false, "NaN");
	a(t(Infinity), false, "Infinity");
	a(t(12), true, "Number");
	a(t(false), true, "Boolean");
	a(t(new Date()), true, "Date");
	a(t(new Number(2)), true, "Number object");
	a(t("asdfaf"), false, "String");
	a(t(""), true, "Empty String");
	if (typeof Symbol === "function") {
		a(t(Symbol("test")), false, "Symbol");
	}
};
