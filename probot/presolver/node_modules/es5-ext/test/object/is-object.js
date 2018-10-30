"use strict";

module.exports = function (t, a) {
	a(t("arar"), false, "String");
	a(t(12), false, "Number");
	a(t(true), false, "Boolean");
	a(t(null), false, "Null");
	a(t(new Date()), true, "Date");
	a(t(new String("raz")), true, "String object");
	a(t({}), true, "Plain object");
	a(t(/a/), true, "Regular expression");
	a(t(function () {}), true, "Function");
};
