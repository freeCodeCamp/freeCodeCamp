"use strict";

module.exports = function (t, a) {
	var x = {}, y = {}, z;
	z = t(x);
	a.not(z, x, "Returns different object");
	a.deep(z, {}, "Empty on empty");

	x = { foo: "bar",
a: 0,
b: false,
c: "",
d: "0",
e: null,
bar: y,
		elo: undefined };
	z = t(x);
	a.deep(z, { foo: "bar", a: 0, b: false, c: "", d: "0", bar: y },
		"Cleared null values");
};
