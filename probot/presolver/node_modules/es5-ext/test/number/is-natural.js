"use strict";

module.exports = function (t, a) {
	a(t(2), true, "Number");
	a(t(-2), false, "Negative");
	a(t(2.34), false, "Float");
	a(t("23"), false, "Not numeric");
	a(t(NaN), false, "NaN");
	a(t(Infinity), false, "Infinity");
};
