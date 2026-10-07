"use strict";

var iteratorSymbol = require("es6-symbol").iterator
  , Iterator       = require("../");

module.exports = function (t, a) {
	var iterator;
	a(t(), false, "Undefined");
	a(t(123), false, "Number");
	a(t({}), false, "Plain object");
	a(t({ length: 0 }), false, "Array-like");
	iterator = {};
	iterator[iteratorSymbol] = function () {
 return new Iterator([]);
};
	a(t(iterator), true, "Iterator");
	a(t([]), true, "Array");
	a(t("foo"), true, "String");
	a(t(""), true, "Empty string");
	a(t(function () {
 return arguments;
}()), true, "Arguments");
};
