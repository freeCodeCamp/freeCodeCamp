"use strict";

module.exports = function (t, a) {
	var o = {};
	a(t(o, {}), false, "Different objects");
	a(t(o, o), true, "Same objects");
	a(t("1", "1"), true, "Same primitive");
	a(t("1", 1), false, "Different primitive types");
	a(t(NaN, NaN), true, "NaN");
	a(t(0, 0), true, "0,0");
	a(t(0, -0), true, "0,-0");
};
