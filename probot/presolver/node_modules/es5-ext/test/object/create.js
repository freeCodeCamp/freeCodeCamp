"use strict";

var setPrototypeOf = require("../../object/set-prototype-of")

  , getPrototypeOf = Object.getPrototypeOf;

module.exports = function (t, a) {
	var x = {}, obj;

	a(getPrototypeOf(t(x)), x, "Normal object");
	a(getPrototypeOf(t(null)),
		(setPrototypeOf && setPrototypeOf.nullPolyfill) || null, "Null");

	a.h1("Properties");
	a.h2("Normal object");
	a(getPrototypeOf(obj = t(x, { foo: { value: "bar" } })), x, "Prototype");
	a(obj.foo, "bar", "Property");
	a.h2("Null");
	a(getPrototypeOf(obj = t(null, { foo: { value: "bar2" } })),
		(setPrototypeOf && setPrototypeOf.nullPolyfill) || null, "Prototype");
	a(obj.foo, "bar2", "Property");
};
