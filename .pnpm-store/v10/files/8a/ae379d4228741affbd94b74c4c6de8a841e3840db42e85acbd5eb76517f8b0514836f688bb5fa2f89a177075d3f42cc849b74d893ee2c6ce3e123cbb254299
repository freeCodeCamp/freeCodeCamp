"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Math, "tanh", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
