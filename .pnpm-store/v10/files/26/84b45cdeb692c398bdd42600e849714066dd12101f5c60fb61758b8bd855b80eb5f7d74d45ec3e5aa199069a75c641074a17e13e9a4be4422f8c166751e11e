"use strict";

module.exports = function (t, a, d) {
	var data
	  , count = 0
	  , x = function (a, b, c) {
			data = [this, a, b, c, ++count];
		}
	  , y = t(x, 200)
	  , z = {};

	a(data, undefined, "Setup");
	y.call(z, 111, "foo", false);
	a(data, undefined, "Immediately");
	setTimeout(function () {
		a(data, undefined, "100ms");
		setTimeout(function () {
			a.deep(data, [z, 111, "foo", false, 1], "250ms");
			data = null;
			clearTimeout(y());
			setTimeout(function () {
				a(data, null, "Clear");
				d();
			}, 300);
		}, 150);
	}, 100);
};
