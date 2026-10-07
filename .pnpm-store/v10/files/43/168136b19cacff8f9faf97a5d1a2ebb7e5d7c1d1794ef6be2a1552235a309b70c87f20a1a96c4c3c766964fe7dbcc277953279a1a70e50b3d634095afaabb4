"use strict";

var delay = require("../../delay");

module.exports = function (t, a) {
	if (typeof Promise !== "function") return null;
	return {
		Tick: function (d) {
			var isInvoked = false;
			t().then(function (result) {
				isInvoked = true;
				delay(function () {
					a(result, undefined);
					d();
				})();
			}, delay(d));
			a(isInvoked, false);
		},
		Timeout: function (d) {
			var isInvoked = false;
			t(100).then(
				delay(function (result) {
					isInvoked = true;
					a(result, undefined);
					d();
				}),
				delay(d)
			);
			setTimeout(function () {
				a(isInvoked, false);
			}, 50);
		}
	};
};
