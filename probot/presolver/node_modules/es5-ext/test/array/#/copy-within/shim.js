"use strict";

module.exports = function (t, a) {
	var args, x;

	a.h1("2 args");
	x = [1, 2, 3, 4, 5];
	t.call(x, 0, 3);
	a.deep(x, [4, 5, 3, 4, 5]);
	a.deep(t.call([1, 2, 3, 4, 5], 1, 3), [1, 4, 5, 4, 5]);
	a.deep(t.call([1, 2, 3, 4, 5], 1, 2), [1, 3, 4, 5, 5]);
	a.deep(t.call([1, 2, 3, 4, 5], 2, 2), [1, 2, 3, 4, 5]);

	a.h1("3 args");
	a.deep(t.call([1, 2, 3, 4, 5], 0, 3, 4), [4, 2, 3, 4, 5]);
	a.deep(t.call([1, 2, 3, 4, 5], 1, 3, 4), [1, 4, 3, 4, 5]);
	a.deep(t.call([1, 2, 3, 4, 5], 1, 2, 4), [1, 3, 4, 4, 5]);

	a.h1("Negative args");
	a.deep(t.call([1, 2, 3, 4, 5], 0, -2), [4, 5, 3, 4, 5]);
	a.deep(t.call([1, 2, 3, 4, 5], 0, -2, -1), [4, 2, 3, 4, 5]);
	a.deep(t.call([1, 2, 3, 4, 5], -4, -3, -2), [1, 3, 3, 4, 5]);
	a.deep(t.call([1, 2, 3, 4, 5], -4, -3, -1), [1, 3, 4, 4, 5]);
	a.deep(t.call([1, 2, 3, 4, 5], -4, -3), [1, 3, 4, 5, 5]);

	a.h1("Array-likes");
	args = { 0: 1, 1: 2, 2: 3, length: 3 };
	a.deep(t.call(args, -2, 0), { 0: 1, 1: 1, 2: 2, length: 3 });
};
