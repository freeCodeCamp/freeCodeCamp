"use strict";

if (!require("./is-implemented")()) {
	Object.defineProperty(Math, "sign", { value: require("./shim"),
		configurable: true,
enumerable: false,
writable: true });
}
