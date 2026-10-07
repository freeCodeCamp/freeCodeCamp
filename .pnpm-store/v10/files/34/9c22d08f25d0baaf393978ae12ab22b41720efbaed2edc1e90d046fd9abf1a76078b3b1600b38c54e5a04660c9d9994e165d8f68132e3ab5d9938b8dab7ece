"use strict";

var d              = require("d")
  , defineProperty = Object.defineProperty;

module.exports = function (t, a) {
	var symbol = t("test"), obj = {};
	defineProperty(obj, symbol, d("foo"));
	a(obj.test, undefined, "Name");
	a(obj[symbol], "foo", "Get");
};
