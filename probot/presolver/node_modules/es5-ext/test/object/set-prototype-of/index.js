"use strict";

var create = require("../../../object/create")

  , getPrototypeOf = Object.getPrototypeOf;

module.exports = function (t, a) {
	var x = {}, y = {};

	if (t === null) return;
	a(t(x, y), x, "Return self object");
	a(getPrototypeOf(x), y, "Object");
	a.throws(function () {
 t(x);
}, TypeError, "Undefined");
	a.throws(function () {
 t("foo");
}, TypeError, "Primitive");
	a(getPrototypeOf(t(x, null)), t.nullPolyfill || null, "Null");
	x = create(null);
	a.h1("Change null prototype");
	a(t(x, y), x, "Result");
	a(getPrototypeOf(x), y, "Prototype");
	a.h1("Set null prototype");
	a(t(y, null), y, "Result");
	a(getPrototypeOf(y), t.nullPolyfill || null, "Prototype");
};
