"use strict";

module.exports = function (t, a) {
	a(t(null), false, "Null");
	a(t(""), true, "Empty string");
	a(t(12), false, "Number");
	a(t(false), false, "Boolean");
	a(t(new Date()), false, "Date");
	a(t(new String("raz")), true, "String object");
	a(t("asdfaf"), true, "String");
};
