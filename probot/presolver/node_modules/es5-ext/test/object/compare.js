"use strict";

module.exports = function (t, a) {
	var d = new Date();

	a.ok(t(12, 3) > 0, "Numbers");
	a.ok(t(2, 13) < 0, "Numbers #2");
	a.ok(t("aaa", "aa") > 0, "Strings");
	a.ok(t("aa", "ab") < 0, "Strings #2");
	a(t("aa", "aa"), 0, "Strings same");
	a(t(d, new Date(d.getTime())), 0, "Same date");
	a.ok(t(d, new Date(d.getTime() + 1)) < 0, "Different date");
};
