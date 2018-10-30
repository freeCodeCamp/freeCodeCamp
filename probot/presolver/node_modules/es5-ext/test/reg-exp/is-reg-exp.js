"use strict";

module.exports = function (t, a) {
	a(t("arar"), false, "String");
	a(t(12), false, "Number");
	a(t(true), false, "Boolean");
	a(t(new Date()), false, "Date");
	a(t(new String("raz")), false, "String object");
	a(t({}), false, "Plain object");
	a(t(/a/), true, "Regular expression");
	a(t(new RegExp("a")), true, "Regular expression via constructor");
};
