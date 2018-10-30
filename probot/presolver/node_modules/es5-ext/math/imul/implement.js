"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Math, "imul", { value: require("./shim"),
		configurable: true,
enumerable: false,
writable: true });
}
