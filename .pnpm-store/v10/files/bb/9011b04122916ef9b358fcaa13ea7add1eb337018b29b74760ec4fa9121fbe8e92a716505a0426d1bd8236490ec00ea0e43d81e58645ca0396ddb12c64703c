"use strict";

module.exports = function (t, a, d) {
	var called = 0;
	var fn = t(function () {
		++called;
	}, 200);

	fn();
	a(called, 1);
	fn();
	fn();
	a(called, 1);
	// Wait 120ms
	setTimeout(function () {
		a(called, 1);
		fn();
		// Wait 120ms
		setTimeout(function () {
			a(called, 2);
			fn();
			fn();

			// Wait 80ms
			setTimeout(function () {
				a(called, 2);

				// Wait 120ms
				setTimeout(function () {
					a(called, 3);

					// Wait 400ms
					setTimeout(function () {
						a(called, 3);
						d();
					}, 400);
				}, 120);
			}, 80);
		}, 120);
	}, 120);
};
