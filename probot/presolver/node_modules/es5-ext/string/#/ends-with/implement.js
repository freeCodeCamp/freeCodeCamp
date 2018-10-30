"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(String.prototype, "endsWith",
		{ value: require("./shim"),
configurable: true,
enumerable: false,
			writable: true });
}
