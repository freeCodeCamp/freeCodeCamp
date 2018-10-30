"use strict";

module.exports = function (t) {
	if (typeof Promise !== "function") return null; // Run tests only in ES2015+ env

	return {
		"Delays execution": function (a, d) {
			var invoked = false;
			var promise = t(function (resolve) {
				invoked = true;
				setTimeout(function () {
					resolve(20);
				}, 10);
			});

			a(invoked, false);

			setTimeout(function () {
				a(invoked, false);
				promise.then(function (value) {
					a(value, 20);
					setTimeout(d, 0); // Escape error swallowing
				});
				a(invoked, true);
			}, 15);
		},
		"Passes rejection": function (a, d) {
			var promise = t(function (resolve, reject) {
				setTimeout(function () {
					reject(new Error("Stop"));
				}, 10);
			});

			promise.catch(function (error) {
				a(error instanceof Error, true);
				a(error.message, "Stop");
				setTimeout(d, 0); // Escape error swallowing
			});
		},
		"Passes sync exception": function (a, d) {
			var promise = t(function () {
				throw new Error("Stop");
			});

			promise.catch(function (error) {
				a(error instanceof Error, true);
				a(error.message, "Stop");
				setTimeout(d, 0); // Escape error swallowing
			});
		}
	};
};
