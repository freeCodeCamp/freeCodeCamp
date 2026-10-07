"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Math, "cbrt", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
