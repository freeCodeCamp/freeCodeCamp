// Partially taken from:
// https://github.com/paulmillr/es6-shim/blob/master/test/string.js

"use strict";

module.exports = function (t, a) {
	var callSite = [];

	callSite.raw = ["The total is ", " ($", " with tax)"];
	a(t(callSite, "{total}", "{total * 1.01}"),
		"The total is {total} (${total * 1.01} with tax)");

	callSite.raw = [];
	a(t(callSite, "{total}", "{total * 1.01}"), "");
};
