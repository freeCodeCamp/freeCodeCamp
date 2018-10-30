"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(RegExp.prototype, "match", { value: require("./shim"),
		configurable: true,
enumerable: false,
writable: true });
}
