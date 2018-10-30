"use strict";

module.exports = function (t, a) {
	var o = [1, 2, 3];
	a(t(o), o, "Array");
	a.deep(t("12r3v"), ["1", "2", "r", "3", "v"], "String");
	a.deep(
		t(
			(function () {
				return arguments;
			})(3, o, "raz")
		),
		[3, o, "raz"],
		"Arguments"
	);
	a.deep(
		t(
			(function () {
				return arguments;
			})(3)
		),
		[3],
		"Arguments with one numeric value"
	);

	a.deep(t({ 0: "raz", 1: "dwa", length: 2 }), ["raz", "dwa"], "Other");
};
