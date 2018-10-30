"use strict";

module.exports = function (t, a) {
	var x = {};
	a(t.call([3, "raz", {}, x, {}], x), 3, "Regular");
	a(t.call([3, "raz", NaN, {}, NaN], NaN), 2, "NaN");
	a(t.call([3, "raz", 0, {}, -0], -0), 2, "-0");
	a(t.call([3, "raz", -0, {}, 0], +0), 2, "+0");
	a(t.call([3, "raz", NaN, {}, NaN], NaN, 3), 4, "fromIndex");
	a(t.call([3, "raz", NaN, {}, NaN], NaN, -1), 4, "fromIndex negative #1");
	a(t.call([3, "raz", NaN, {}, NaN], NaN, -2), 4, "fromIndex negative #2");
	a(t.call([3, "raz", NaN, {}, NaN], NaN, -3), 2, "fromIndex negative #3");
};
