"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Math, "asinh", { value: require("./shim"),
		configurable: true,
enumerable: false,
writable: true });
}
