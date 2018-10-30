'use strict';

module.exports = function (t, a, d) {
	var invoked;

	a(t(function () {
		a(arguments.length, 0, "Arguments");
		invoked = true;
	}), undefined, "Return");
	a(invoked, undefined, "Is not run immediately");
	setTimeout(function () {
		a(invoked, true, "Run in next tick");
		invoked = [];
		t(function () { invoked.push(0); });
		t(function () { invoked.push(1); });
		t(function () { invoked.push(2); });
		setTimeout(function () {
			a.deep(invoked, [0, 1, 2], "Serial");
			d();
		}, 10);
	}, 10);
};
