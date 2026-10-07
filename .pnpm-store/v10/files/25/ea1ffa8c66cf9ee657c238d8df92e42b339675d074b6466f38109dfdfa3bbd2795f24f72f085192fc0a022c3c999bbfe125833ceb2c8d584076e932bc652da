"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(require("ext/global-this"), "Symbol", {
		value: require("./polyfill"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
