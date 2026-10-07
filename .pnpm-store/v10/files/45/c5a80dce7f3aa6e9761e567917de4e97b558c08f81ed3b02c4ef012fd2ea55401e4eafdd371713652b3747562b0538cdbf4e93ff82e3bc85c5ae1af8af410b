"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Math, "trunc", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
