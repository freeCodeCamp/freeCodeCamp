"use strict";

module.exports = function (t, a) {
	a.throws(
		function () {
			t(undefined);
		},
		TypeError,
		"Undefined"
	);
	a.throws(
		function () {
			t(null);
		},
		TypeError,
		"Null"
	);
	a(t(0), 0, "Zero");
	a.throws(
		function () {
			t(NaN);
		},
		TypeError,
		"NaN"
	);
	a.throws(
		function () {
			t(Infinity);
		},
		TypeError,
		"Infinity"
	);
	a(t(12), 12, "Number");
	a(t(false), 0, "Boolean");
	a(t(new Date(1000000)), 1000000, "Date");
	a(t(new Number(2)), 2, "Number object");
	a.throws(
		function () {
			t("asdfaf");
		},
		TypeError,
		"String"
	);
	a(t(""), 0, "Empty String");
	if (typeof Symbol === "function") {
		a.throws(
			function () {
				t(Symbol("test"));
			},
			TypeError,
			"Symbol"
		);
	}
};
