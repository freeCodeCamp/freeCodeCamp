"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(RegExp.prototype, "search", { value: require("./shim"),
		configurable: true,
enumerable: false,
writable: true });
}
