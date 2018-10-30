"use strict";

module.exports = function (t, a) {
	var arr = [];
	a(t(arr), arr, "Array");
	a(t(""), "", "String");
	var args = (function () {
		return arguments;
	}());
	a(t(args), args, "Arguments");
	var arrayLike = { length: 0 };
	a(t(arrayLike), arrayLike, "Array like");
	a.throws(
		function () {
			t(function () {});
		},
		TypeError,
		"Function"
	);
	a.throws(
		function () {
			t({});
		},
		TypeError,
		"Plain object"
	);
	a.throws(
		function () {
			t(/raz/);
		},
		TypeError,
		"Regexp"
	);
	a.throws(
		function () {
			t();
		},
		TypeError,
		"No argument"
	);
	a.throws(
		function () {
			t(null);
		},
		TypeError,
		"Null"
	);
	a.throws(
		function () {
			t(undefined);
		},
		TypeError,
		"Undefined"
	);
};
