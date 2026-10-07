"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Math, "atanh", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
