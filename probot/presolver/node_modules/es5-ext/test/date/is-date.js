"use strict";

module.exports = function (t, a) {
	a(t("arar"), false, "String");
	a(t(12), false, "Number");
	a(t(true), false, "Boolean");
	a(t(new Date()), true, "Date");
	a(t(new String("raz")), false, "String object");
	a(t({}), false, "Plain object");
};
