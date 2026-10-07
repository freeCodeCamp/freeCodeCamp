"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Object, "keys", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
