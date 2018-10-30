"use strict";

module.exports = function (t, a) {
	var o = { first: 1, second: 4 }, r1, r2;
	o = Object.create(o, {
		third: { value: null }
	});
	o.first = 2;
	o = Object.create(o);
	o.fourth = 3;

	r1 = t(o);
	r1.sort();
	r2 = ["first", "second", "third", "fourth"]
		.concat(Object.getOwnPropertyNames(Object.prototype));
	r2.sort();
	a.deep(r1, r2);
};
