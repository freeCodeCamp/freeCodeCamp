"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Math, "clz32", { value: require("./shim"),
		configurable: true,
enumerable: false,
writable: true });
}
