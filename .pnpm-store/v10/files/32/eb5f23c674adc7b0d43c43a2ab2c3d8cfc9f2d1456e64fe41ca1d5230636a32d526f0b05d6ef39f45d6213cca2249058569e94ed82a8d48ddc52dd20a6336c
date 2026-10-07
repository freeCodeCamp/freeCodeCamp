"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Array, "from", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
