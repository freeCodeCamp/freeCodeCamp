"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(RegExp.prototype, "replace", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
