"use strict";

module.exports = function (t, a) {
	// Just sanity checks, as logic is tested at isPlainFunction
	var fn = function () {};
	a(t(fn), fn, "Function");
	a.throws(
		function () {
			t({});
		},
		TypeError,
		"Error"
	);
};
