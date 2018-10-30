"use strict";

var numIsNaN = require("../../number/is-nan");

module.exports = function (t, a) {
	var x;
	a(t(0), 0, "0");
	a(t(false), false, "false");
	a(t(""), "", "''");
	a(numIsNaN(t(NaN)), true, "NaN");
	a(t(x = {}), x, "{}");

	a.throws(function () {
		t();
	}, "Undefined");
	a.throws(function () {
		t(null);
	}, "null");
};
