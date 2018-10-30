"use strict";

module.exports = function (t, a) {
	a(t(1), 31, "1");
	a(t(1000), 22, "1000");
	a(t(), 32, "No arguments");
	a(t(Infinity), 32, "Infinity");
	a(t(-Infinity), 32, "-Infinity");
	a(t("foo"), 32, "String");
	a(t(true), 31, "Boolean");
	a(t(3.5), 30, "Float");
};
