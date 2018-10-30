"use strict";

var isArguments    = require("es5-ext/function/is-arguments")
  , isString       = require("es5-ext/string/is-string")
  , ArrayIterator  = require("./array")
  , StringIterator = require("./string")
  , iterable       = require("./valid-iterable")
  , iteratorSymbol = require("es6-symbol").iterator;

module.exports = function (obj) {
	if (typeof iterable(obj)[iteratorSymbol] === "function") return obj[iteratorSymbol]();
	if (isArguments(obj)) return new ArrayIterator(obj);
	if (isString(obj)) return new StringIterator(obj);
	return new ArrayIterator(obj);
};
