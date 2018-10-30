"use strict";

module.exports = function (t, a) {
	var x = {}, y = {}
	  , o = { foo: "bar", raz: x, trzy: "cztery", five: "6" };

	a(t(o, "bar"), "foo", "First property");
	a(t(o, 6), null, "Primitive that's not there");
	a(t(o, x), "raz", "Object");
	a(t(o, y), null, "Object that's not there");
	a(t(o, "6"), "five", "Last property");
};
