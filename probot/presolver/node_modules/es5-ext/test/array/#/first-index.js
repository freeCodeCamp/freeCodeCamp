"use strict";

module.exports = function (t, a) {
	var x;
	a(t.call([]), null, "Empty");
	a(t.call([null]), 0, "One value");
	a(t.call([1, 2, 3]), 0, "Many values");
	a(t.call(new Array(1000)), null, "Sparse empty");
	x = [];
	x[883] = undefined;
	x[890] = null;
	a(t.call(x), 883, "Manual sparse, distant value");
	x = new Array(1000);
	x[657] = undefined;
	x[700] = null;
	a(t.call(x), 657, "Sparse, distant value");
};
