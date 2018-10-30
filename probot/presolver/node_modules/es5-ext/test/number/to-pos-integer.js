"use strict";

module.exports = function (t, a) {
	a(t({}), 0, "NaN");
	a(t(20), 20, "Positive integer");
	a(t(-20), 0, "Negative integer");
	a(t(Infinity), Infinity, "Infinity");
	a(t(15.343), 15, "Float");
	a(t(-15.343), 0, "Negative float");
};
