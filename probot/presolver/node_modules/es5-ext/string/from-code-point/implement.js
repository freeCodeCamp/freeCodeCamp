"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(String, "fromCodePoint", { value: require("./shim"),
		configurable: true,
enumerable: false,
writable: true });
}
