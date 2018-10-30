"use strict";

module.exports = function (t, a) {
	a(t(), false);
	a(t(undefined), false);
	a(t(null), false);
	a(t(NaN), true);
	a(t(0), true);
	a(t(false), true);
	a(t("null"), true);
	a(t(""), true);
	a(t({}), true);
	a(t(Object.prototype), true);
};
