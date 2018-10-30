"use strict";

var iteratorSymbol = require("es6-symbol").iterator
  , Iterator       = require("../");

module.exports = function (t, a) {
	var iterator;
	a.throws(function () {
 t();
}, TypeError, "Null");
	a.throws(function () {
 t({});
}, TypeError, "Plain object");
	a.throws(function () {
 t({ length: 0 });
}, TypeError, "Array-like");
	iterator = {};
	iterator[iteratorSymbol] = function () {
 return new Iterator([]);
};
	a(t(iterator) instanceof Iterator, true, "Iterator");
	a(String(t([])), "[object Array Iterator]", " Array");
	a(String(t(function () {
 return arguments;
}())), "[object Array Iterator]", " Arguments");
	a(String(t("foo")), "[object String Iterator]", "String");
};
