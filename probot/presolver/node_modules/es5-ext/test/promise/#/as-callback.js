"use strict";

module.exports = function (t, a) {
	if (typeof Promise !== "function") return null;
	return {
		Success: function (d) {
			t.call(
				new Promise(function (resolve) {
					resolve("foo");
				}),
				function (error, value) {
					a(error, null);
					a(value, "foo");
					d();
				}
			);
		},
		Failure: function (d) {
			var error = new Error("Rejection");
			t.call(
				new Promise(function (resolve, reject) {
					reject(error);
				}),
				function (passedError, value) {
					a(passedError, error);
					a(value, undefined);
					d();
				}
			);
		}
	};
};
