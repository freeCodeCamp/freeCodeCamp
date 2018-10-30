"use strict";

var o = { 1: 1, 2: 2, 3: 3 };

module.exports = function (t, a) {
	var o2 = {}, i = 0;
	t(o, function (value, name) {
		o2[name] = value;
		return false;
	});
	a(JSON.stringify(o2), JSON.stringify(o), "Iterates");

	a(t(o, function () {
		++i;
		return true;
	}), 1, "Finds");
	a(i, 1, "Stops iteration after condition is met");

	a(t(o, function () {
		return false;
	}), undefined, "Fails");

};
