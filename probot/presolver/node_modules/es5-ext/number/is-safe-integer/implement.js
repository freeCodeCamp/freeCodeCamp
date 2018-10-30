"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Number, "isSafeInteger", { value: require("./shim"),
		configurable: true,
enumerable: false,
writable: true });
}
