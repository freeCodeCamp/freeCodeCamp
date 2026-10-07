"use strict";

var isUnicode = require("../is-unicode");

if (!require("./is-implemented")()) {
	Object.defineProperty(RegExp.prototype, "unicode", {
		configurable: true,
		enumerable: false,
		get: isUnicode
	});
}
