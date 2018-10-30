"use strict";

module.exports = function (t, a) {
	a(t(12), 12, "Number in range");
	a(t(12.23), 12, "Rounds number in range");
	a(t(-12.63), -12, "Rounds negative number in range");
	a.throws(
		function () {
			t(NaN);
		},
		TypeError,
		"Throws on invalid"
	);
};
