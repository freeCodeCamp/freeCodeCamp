"use strict";

module.exports = function (t, a) {
	var x = [], y = {}, z = {};
	a.deep(t.call(x, y), [], "Empty");
	a.not(t.call(x), x, "Returns copy");
	a.deep(t.call([1], y), [1], "One");
	a.deep(t.call([1, "raz"], y), [1, y, "raz"], "One");
	a.deep(t.call([1, "raz", x], y), [1, y, "raz", y, x], "More");
	x = new Array(1000);
	x[23] = 2;
	x[3453] = "raz";
	x[500] = z;
	a.deep(t.call(x, y), [2, y, z, y, "raz"], "Sparse");
};
