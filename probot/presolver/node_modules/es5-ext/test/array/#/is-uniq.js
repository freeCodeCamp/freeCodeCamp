"use strict";

module.exports = function (t, a) {
	var x = {};
	a(t.call([]), true, "Empty");
	a(t.call({}), true, "Empty lists");
	a(t.call([1, x, "raz"]), true, "Uniq");
	a(t.call([1, x, 1, "raz"]), false, "Not Uniq: primitive");
	a(t.call([1, x, "1", "raz"]), true, "Uniq: primitive");
	a(t.call([1, x, 1, {}, "raz"]), false, "Not Uniq: Obj");
};
