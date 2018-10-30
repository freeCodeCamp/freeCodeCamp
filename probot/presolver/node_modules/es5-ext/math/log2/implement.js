"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Math, "log2", { value: require("./shim"),
		configurable: true,
enumerable: false,
writable: true });
}
