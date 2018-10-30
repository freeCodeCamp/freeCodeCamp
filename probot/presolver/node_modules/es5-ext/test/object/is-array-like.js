"use strict";

module.exports = function (t, a) {
	a(t([]), true, "Array");
	a(t(""), true, "String");
	a(
		t(
			(function () {
				return arguments;
			})()
		),
		true,
		"Arguments"
	);
	a(t({ length: 0 }), true, "List object");
	a(t(function () {}), false, "Function");
	a(t({}), false, "Plain object");
	a(t(/raz/), false, "Regexp");
	a(t(), false, "No argument");
	a(t(null), false, "Null");
	a(t(undefined), false, "Undefined");
};
