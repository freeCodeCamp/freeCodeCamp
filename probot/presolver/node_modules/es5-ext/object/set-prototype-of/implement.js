"use strict";

var shim;

if (!require("./is-implemented")() && (shim = require("./shim"))) {
	Object.defineProperty(Object, "setPrototypeOf",
		{ value: shim, configurable: true, enumerable: false, writable: true });
}
