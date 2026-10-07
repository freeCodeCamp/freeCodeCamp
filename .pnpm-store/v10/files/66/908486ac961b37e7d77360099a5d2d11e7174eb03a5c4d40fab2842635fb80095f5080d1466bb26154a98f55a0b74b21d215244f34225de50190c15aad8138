"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Math, "log10", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
