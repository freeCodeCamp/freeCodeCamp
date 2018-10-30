"use strict";

module.exports = function (t, a) {
	var x = {};
	a(t.call([], []), true, "Empty");
	a(t.call([], {}), true, "Empty lists");
	a(t.call([1, x, "raz"], [1, x, "raz"]), true, "Same");
	a(t.call([1, x, "raz"], { 0: 1, 1: x, 2: "raz", length: 3 }), true,
			"Same lists");
	a(t.call([1, x, "raz"], [x, 1, "raz"]), false, "Diff order");
	a(t.call([1, x], [1, x, "raz"]), false, "Diff length #1");
	a(t.call([1, x, "raz"], [1, x]), false, "Diff length #2");
};
