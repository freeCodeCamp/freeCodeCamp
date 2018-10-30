"use strict";

var iteratorSymbol = require("es6-symbol").iterator;

module.exports = function (t, a) {
	var x;
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
	x = {};
	x[iteratorSymbol] = function () {};
	a(t(x), true, "Iterable");
};
