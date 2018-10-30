"use strict";

exports.__generic = function (t, a) {
	a(t.call(this), this[this.length - 1]);
};

exports[""] = function (t, a) {
	var x;
	a(t.call([]), undefined, "Empty");
	a(t.call(new Array(234), undefined, "Sparse empty"));
	x = new Array(2342);
	x[434] = {};
	x[450] = {};
	a(t.call(x), x[450], "Sparse");
};
