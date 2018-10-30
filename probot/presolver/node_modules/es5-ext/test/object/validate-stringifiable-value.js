"use strict";

module.exports = function (t, a) {
	var x;
	a.throws(function () {
 t();
}, TypeError, "Undefined");
	a.throws(function () {
 t(null);
}, TypeError, "Null");
	a(t(0), "0");
	a(t(false), "false");
	a(t(""), "");
	a(t({}), String({}), "Object");
	a(t(x = function () {}), String(x), "Function");
	a(t(x = new String("raz")), String(x), "String object"); // Jslint: ignore
	a(t(x = new Date()), String(x), "Date");

	a.throws(function () {
 t(Object.create(null));
}, TypeError, "Null prototype object");
};
