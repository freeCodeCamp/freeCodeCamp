"use strict";

module.exports = function (t, a) {
	var o1 = { a: 1, b: 2 }
	  , o2 = { b: 3, c: 4 };

	a(t(o1, o2), o1, "Returns self");
	a.deep(o1, { a: 1, b: 3, c: 4 }, "Single: content");

	a.deep(t({}, o1, o2), { a: 1, b: 3, c: 4 }, "Multi argument");
};
