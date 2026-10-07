"use strict";

var SymbolPolyfill = require("../polyfill");

module.exports = function (t, a) {
	a(t(undefined), false, "Undefined");
	a(t(null), false, "Null");
	a(t(true), false, "Primitive");
	a(t("raz"), false, "String");
	a(t({}), false, "Object");
	a(t([]), false, "Array");
	if (typeof Symbol !== "undefined") {
		a(t(Symbol("foo")), true, "Native");
	}
	a(t(SymbolPolyfill()), true, "Polyfill");
};
