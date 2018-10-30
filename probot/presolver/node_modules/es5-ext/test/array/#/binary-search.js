"use strict";

var compare  = function (value) {
 return this - value;
};

module.exports = function (t, a) {
	var arr;
	arr = [2, 5, 5, 8, 34, 67, 98, 345, 678];

	// Highest, equal match
	a(t.call(arr, compare.bind(1)), 0, "All higher");
	a(t.call(arr, compare.bind(679)), arr.length - 1, "All lower");
	a(t.call(arr, compare.bind(4)), 0, "Mid");
	a(t.call(arr, compare.bind(5)), 2, "Match");
	a(t.call(arr, compare.bind(6)), 2, "Above");
};
