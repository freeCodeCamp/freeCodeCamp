// Taken from https://github.com/paulmillr/es6-shim/blob/master/test/array.js

"use strict";

module.exports = function (t, a) {
	var x;

	x = [1, 2, 3, 4, 5, 6];
	a(t.call(x, -1), x, "Returns self object");
	a.deep(x, [-1, -1, -1, -1, -1, -1], "Value");

	a.deep(t.call([1, 2, 3, 4, 5, 6], -1, 3), [1, 2, 3, -1, -1, -1],
		"Positive start");
	a.deep(t.call([1, 2, 3, 4, 5, 6], -1, -3), [1, 2, 3, -1, -1, -1],
		"Negative start");
	a.deep(t.call([1, 2, 3, 4, 5, 6], -1, 9), [1, 2, 3, 4, 5, 6],
		"Large start");
};
