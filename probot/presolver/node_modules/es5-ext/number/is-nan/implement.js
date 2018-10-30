"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Number, "isNaN", { value: require("./shim"),
		configurable: true,
enumerable: false,
writable: true });
}
