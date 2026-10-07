"use strict";

module.exports = function (t, a, d) {
	var called = 0, fn = t(function () {
 ++called;
});

	fn();
	fn();
	fn();
	setTimeout(function () {
		a(called, 1);

		called = 0;
		fn = t(function () {
 ++called;
}, 50);
		fn();
		fn();
		fn();

		setTimeout(function () {
			fn();
			fn();

			setTimeout(function () {
				fn();
				fn();

				setTimeout(function () {
					fn();
					fn();

					setTimeout(function () {
						a(called, 1);
						d();
					}, 70);
				}, 30);
			}, 30);
		}, 30);
	}, 10);
};
