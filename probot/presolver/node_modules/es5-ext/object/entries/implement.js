"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Object, "entries", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
