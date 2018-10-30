"use strict";

var SubArray = require("../../../../array/_sub-array-dummy-safe");

module.exports = function (t, a) {
	var arr, x = {}, subArr, result;

	arr = ["foo", undefined, 0, "2d", false, x, null];

	a.deep(t.call(arr, 2, 2, "bar"), [0, "2d"], "Plain array: result");
	a.deep(arr, ["foo", undefined, "bar", false, x, null], "Plain array: change");

	subArr = new SubArray("foo", undefined, 0, "2d", false, x, null);

	result = t.call(subArr, 2, 2, "bar");
	a(result instanceof SubArray, true, "Instance of subclass");
	a.deep(result, [0, "2d"], "Subclass: result");
	a.deep(subArr, ["foo", undefined, "bar", false, x, null], "Subclass: change");
};
