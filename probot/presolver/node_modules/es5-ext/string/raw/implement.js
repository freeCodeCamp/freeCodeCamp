"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(String, "raw", { value: require("./shim"),
		configurable: true,
enumerable: false,
writable: true });
}
