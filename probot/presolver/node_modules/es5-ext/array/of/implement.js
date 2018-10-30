"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Array, "of", { value: require("./shim"),
		configurable: true,
enumerable: false,
writable: true });
}
