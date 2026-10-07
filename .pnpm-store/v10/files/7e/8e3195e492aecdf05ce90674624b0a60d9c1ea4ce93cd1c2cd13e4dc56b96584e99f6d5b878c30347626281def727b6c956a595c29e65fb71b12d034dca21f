"use strict";

module.exports = (function () {
	var SubArray = require("./_sub-array-dummy")
	  , arr;

	if (!SubArray) return false;
	arr = new SubArray();
	if (!Array.isArray(arr)) return false;
	if (!(arr instanceof SubArray)) return false;

	arr[34] = "foo";
	return arr.length === 35;
})();
