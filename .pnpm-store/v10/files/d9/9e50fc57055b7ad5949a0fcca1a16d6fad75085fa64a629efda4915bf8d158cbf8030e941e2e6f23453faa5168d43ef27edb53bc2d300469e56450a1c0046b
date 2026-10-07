"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Math, "expm1", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
