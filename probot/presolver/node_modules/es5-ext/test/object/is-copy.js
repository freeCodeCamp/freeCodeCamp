"use strict";

module.exports = function (t, a) {
	a(t({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2, 3: 3 }), true, "Same");
	a(t({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2, 3: 4 }), false,
		"Different property value");
	a(t({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2 }), false,
		"Property only in source");
	a(t({ 1: 1, 2: 2 }, { 1: 1, 2: 2, 3: 4 }), false,
		"Property only in target");

	a(t("raz", "dwa"), false, "String: diff");
	a(t("raz", "raz"), true, "String: same");
	a(t("32", 32), false, "String & Number");

	a(t([1, "raz", true], [1, "raz", true]), true, "Array: same");
	a(t([1, "raz", undefined], [1, "raz"]), false, "Array: diff");
};
