"use strict";

module.exports = function (t, a) {
	a(t(2), true, "Number");
	a(t(2.34), false, "Float");
	a(t(Math.pow(2, 53)), false, "Too large");
	a(t(Math.pow(2, 53) - 1), true, "Maximum");
	a(t("23"), false, "Not numeric");
	a(t(NaN), false, "NaN");
	a(t(Infinity), false, "Infinity");
};
