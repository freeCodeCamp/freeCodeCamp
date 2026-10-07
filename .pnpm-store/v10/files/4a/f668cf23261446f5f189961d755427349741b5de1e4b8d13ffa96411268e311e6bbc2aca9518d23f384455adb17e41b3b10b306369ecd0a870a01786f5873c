"use strict";

var delay = require("../../delay");

module.exports = function (t, a) {
	if (typeof Promise !== "function") return null;
	return {
		Success: function (d) {
			var promise = t.call(
				new Promise(function (resolve) {
					setTimeout(function () { resolve("foo"); }, 20);
				}),
				40
			);

			promise.then(
				// Delay to escape error swallowing
				delay(function (result) {
					a(result, "foo");
					d();
				}),
				delay(d)
			);
		},
		Timeout: function (d) {
			var promise = t.call(
				new Promise(function (resolve) {
					setTimeout(function () { resolve("foo"); }, 40);
				}),
				20
			);

			promise.then(
				// Delay to escape error swallowing
				delay(function () {
					a.never();
					d();
				}),
				delay(function (err) {
					a(err.code, "PROMISE_TIMEOUT");
					d();
				})
			);
		}
	};
};
