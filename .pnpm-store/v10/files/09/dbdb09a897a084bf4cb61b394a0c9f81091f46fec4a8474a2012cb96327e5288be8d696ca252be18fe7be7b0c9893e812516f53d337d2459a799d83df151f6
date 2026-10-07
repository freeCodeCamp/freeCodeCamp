"use strict";

var SymbolPolyfill = require("../polyfill");

module.exports = function (t, a) {
	var symbol;
	a.throws(function () { t(undefined); }, TypeError, "Undefined");
	a.throws(function () { t(null); }, TypeError, "Null");
	a.throws(function () { t(true); }, TypeError, "Primitive");
	a.throws(function () { t("raz"); }, TypeError, "String");
	a.throws(function () { t({}); }, TypeError, "Object");
	a.throws(function () { t([]); }, TypeError, "Array");
	if (typeof Symbol !== "undefined") {
		symbol = Symbol("foo");
		a(t(symbol), symbol, "Native");
	}
	symbol = SymbolPolyfill();
	a(t(symbol), symbol, "Polyfill");
};
