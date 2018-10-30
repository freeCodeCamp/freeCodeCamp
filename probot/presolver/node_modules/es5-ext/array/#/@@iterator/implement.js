"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Array.prototype, require("es6-symbol").iterator, {
		value: require("./shim"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
