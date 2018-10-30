"use strict";

module.exports = function (t, a) {
	a(t(undefined), false, "Undefined");
	a(t(null), true, "Null");
	a(t(2), true, "Number");
	a(t(-2), false, "Negative");
	a(t(2.34), false, "Float");
	a(t("23"), true, "Numeric string");
	a(t(NaN), false, "NaN");
	a(t(Infinity), false, "Infinity");
};
