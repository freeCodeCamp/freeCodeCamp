"use strict";

module.exports = function (t, a) {
	var o = { raz: 1, dwa: 2, trzy: 3 }
	  , o2 = {};
	a(t(o, function (value, name) {
		o2[name] = value;
	}), undefined, "Return");
	a.deep(o2, o);
};
