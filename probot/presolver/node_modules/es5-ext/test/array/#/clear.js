"use strict";

module.exports = function (t, a) {
	var arr = [1, 2, {}, 4];
	a(t.call(arr), arr, "Returns same array");
	a.deep(arr, [], "Empties array");
};
