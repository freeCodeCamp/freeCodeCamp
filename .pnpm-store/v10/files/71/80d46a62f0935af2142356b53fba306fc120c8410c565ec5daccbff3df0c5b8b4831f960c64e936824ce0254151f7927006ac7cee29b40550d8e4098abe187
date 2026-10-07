"use strict";

var toStringTagSymbol = require("es6-symbol").toStringTag

  , objToString = Object.prototype.toString
  , id = "[object WeakMap]"
  , Global = typeof WeakMap === "undefined" ? null : WeakMap;

module.exports = function (value) {
	return (value && ((Global && (value instanceof Global)) ||
			(objToString.call(value) === id) || (value[toStringTagSymbol] === "WeakMap"))) ||
			false;
};
