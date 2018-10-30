"use strict";

var SubArray = require("../../../../array/_sub-array-dummy-safe");

module.exports = function (t, a) {
	var arr, x = {}, subArr, result;

	arr = ["foo", undefined, 0, "2d", false, x, null];

	a.deep(t.call(arr, 2, 4), [0, "2d"], "Plain array: result");

	subArr = new SubArray("foo", undefined, 0, "2d", false, x, null);

	result = t.call(subArr, 2, 4);
	a(result instanceof SubArray, true, "Instance of subclass");
	a.deep(result, [0, "2d"], "Subclass: result");
};
