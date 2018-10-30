"use strict";

module.exports = function (t, a) {
	var x;
	a(t.call([]), null, "Empty");
	a(t.call([null]), 0, "One value");
	a(t.call([1, 2, 3]), 2, "Many values");
	a(t.call(new Array(1000)), null, "Sparse empty");
	x = [];
	x[883] = null;
	x[890] = undefined;
	a(t.call(x), 890, "Manual sparse, distant value");
	x = new Array(1000);
	x[657] = null;
	x[700] = undefined;
	a(t.call(x), 700, "Sparse, distant value");
};
