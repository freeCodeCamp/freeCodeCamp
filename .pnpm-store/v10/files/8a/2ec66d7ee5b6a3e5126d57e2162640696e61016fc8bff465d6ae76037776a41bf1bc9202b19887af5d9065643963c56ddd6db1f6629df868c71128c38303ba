"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Math, "acosh", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
