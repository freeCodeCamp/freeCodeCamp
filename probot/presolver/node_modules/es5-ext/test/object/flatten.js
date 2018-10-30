"use strict";

module.exports = function (t, a) {
	a.deep(t({ a: { aa: 1, ab: 2 }, b: { ba: 3, bb: 4 } }),
		{ aa: 1, ab: 2, ba: 3, bb: 4 });
};
