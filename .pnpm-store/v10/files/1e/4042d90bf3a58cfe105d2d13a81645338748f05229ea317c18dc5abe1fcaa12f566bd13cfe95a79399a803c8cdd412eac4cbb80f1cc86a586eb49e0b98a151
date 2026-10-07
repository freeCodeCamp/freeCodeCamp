"use strict";

var iteratorSymbol = require("es6-symbol").iterator
  , Iterator       = require("../");

module.exports = function (t, a) {
	var obj;
	a.throws(function () {
 t();
}, TypeError, "Undefined");
	a.throws(function () {
 t({});
}, TypeError, "Plain object");
	a.throws(function () {
 t({ length: 0 });
}, TypeError, "Array-like");
	obj = {};
	obj[iteratorSymbol] = function () {
 return new Iterator([]);
};
	a(t(obj), obj, "Iterator");
	obj = [];
	a(t(obj), obj, "Array");
	obj = (function () {
 return arguments;
}());
	a(t(obj), obj, "Arguments");
};
