"use strict";

var d              = require("d")
  , isSymbol       = require("../is-symbol")
  , defineProperty = Object.defineProperty;

module.exports = function (t, a) {
	var symbol = t("test"), obj = {};
	defineProperty(obj, symbol, d("foo"));
	a(obj.test, undefined, "Name");
	a(obj[symbol], "foo", "Get");
	a(obj instanceof t, false);

	a(isSymbol(symbol), true, "Symbol");
	a(isSymbol(t.iterator), true, "iterator");
	a(isSymbol(t.toStringTag), true, "toStringTag");

	obj = {};
	obj[symbol] = "foo";
	if (typeof symbol !== "symbol") {
		a.deep(Object.getOwnPropertyDescriptor(obj, symbol), {
			configurable: true,
			enumerable: false,
			value: "foo",
			writable: true
		});
	}
	symbol = t.for("marko");
	a(isSymbol(symbol), true);
	a(t.for("marko"), symbol);
	a(t.keyFor(symbol), "marko");
};
