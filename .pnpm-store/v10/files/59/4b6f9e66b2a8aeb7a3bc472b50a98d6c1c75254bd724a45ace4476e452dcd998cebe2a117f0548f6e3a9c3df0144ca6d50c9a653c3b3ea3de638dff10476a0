"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Object, "entries", {
		value: require("./implementation"),
		configurable: true,
		enumerable: false,
		writable: true
	});
}
