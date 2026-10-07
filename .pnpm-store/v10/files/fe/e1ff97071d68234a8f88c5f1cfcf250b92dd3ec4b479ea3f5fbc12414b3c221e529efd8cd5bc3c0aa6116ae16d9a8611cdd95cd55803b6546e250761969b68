"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Math, "log1p", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
