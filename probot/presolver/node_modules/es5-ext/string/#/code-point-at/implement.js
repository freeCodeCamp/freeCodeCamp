"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(String.prototype, "codePointAt",
		{ value: require("./shim"),
configurable: true,
enumerable: false,
			writable: true });
}
