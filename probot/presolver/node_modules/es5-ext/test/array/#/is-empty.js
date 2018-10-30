"use strict";

module.exports = function (t, a) {
	var x = {};
	a(t.call([]), true, "Empty");
	a(t.call({ length: 0 }), true, "Empty lists");
	a(t.call([1, x, "raz"]), false, "Non empty");
};
