"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Object, "assign", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
