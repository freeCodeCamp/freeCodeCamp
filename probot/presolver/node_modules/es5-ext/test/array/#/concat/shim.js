"use strict";

var isConcatSpreadable = require("es6-symbol").isConcatSpreadable
  , SubArray           = require("../../../../array/_sub-array-dummy-safe");

module.exports = function (t, a) {
	var arr = [1, 3, 45], x = {}, subArr, subArr2, result;

	a.deep(t.call(arr, "2d", x, ["ere", "fe", x], false, null),
		[1, 3, 45, "2d", x, "ere", "fe", x, false, null], "Plain array");

	subArr = new SubArray("lol", "miszko");
	subArr2 = new SubArray("elo", "fol");

	result = t.call(subArr, "df", arr, "fef", subArr2, null);
	a(result instanceof SubArray, true, "Instance of subclass");
	a.deep(result, ["lol", "miszko", "df", 1, 3, 45, "fef", "elo", "fol", null],
		"Spreable by default");

	SubArray.prototype[isConcatSpreadable] = false;

	result = t.call(subArr, "df", arr, "fef", subArr2, null);
	a.deep(result, [subArr, "df", 1, 3, 45, "fef", subArr2, null], "Non spreadable");

	delete SubArray.prototype[isConcatSpreadable];
};
