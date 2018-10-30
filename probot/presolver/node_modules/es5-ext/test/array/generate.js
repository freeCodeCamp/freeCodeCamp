"use strict";

module.exports = function (t, a) {
	var x = {}, y = {};
	a.deep(t(3), [undefined, undefined, undefined], "Just length");
	a.deep(t(0, "x"), [], "No repeat");
	a.deep(t(1, x, y), [x], "Arguments length larger than repeat number");
	a.deep(t(3, x), [x, x, x], "Single argument");
	a.deep(t(5, x, y), [x, y, x, y, x], "Many arguments");
};
