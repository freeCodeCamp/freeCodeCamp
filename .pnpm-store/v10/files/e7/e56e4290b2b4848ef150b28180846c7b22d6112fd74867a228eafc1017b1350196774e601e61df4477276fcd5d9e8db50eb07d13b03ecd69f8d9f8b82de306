"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Promise.prototype, "finally", {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
