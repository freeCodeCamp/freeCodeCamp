"use strict";

module.exports = function (t, a) {
	var obj = { 1: 1, 2: 2, 3: 3 };
	a.deep(t(obj, function (value, key, context) {
		a(context, obj, "Context argument");
		return (value + 1) + key;
	}), { 1: "21", 2: "32", 3: "43" });
};
