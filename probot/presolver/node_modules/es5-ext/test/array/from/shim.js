// Some tests taken from: https://github.com/mathiasbynens/Array.from/blob/master/tests/tests.js

"use strict";

module.exports = function (t, a) {
	var o = [1, 2, 3], MyType;
	a.not(t(o), o, "Array");
	a.deep(t(o), o, "Array: same content");
	a.deep(t("12r3v"), ["1", "2", "r", "3", "v"], "String");
	a.deep(
		t(
			(function () {
				return arguments;
			})(3, o, "raz")
		),
		[3, o, "raz"],
		"Arguments"
	);
	a.deep(
		t(
			(function () {
				return arguments;
			})(3)
		),
		[3],
		"Arguments with one numeric value"
	);

	a.deep(t({ 0: "raz", 1: "dwa", length: 2 }), ["raz", "dwa"], "Other");

	a.deep(
		t(
			o,
			function (val) {
				return (val + 2) * 10;
			},
			10
		),
		[30, 40, 50],
		"Mapping"
	);

	a.throws(
		function () {
			t();
		},
		TypeError,
		"Undefined"
	);
	a.deep(t(3), [], "Primitive");

	a(t.length, 1, "Length");
	a.deep(t({ length: 0 }), [], "No values Array-like");
	a.deep(t({ length: -1 }), [], "Invalid length Array-like");
	a.deep(t({ length: -Infinity }), [], "Invalid length Array-like #2");
	a.throws(
		function () {
			t(undefined);
		},
		TypeError,
		"Undefined"
	);
	a.throws(
		function () {
			t(null);
		},
		TypeError,
		"Null"
	);
	a.deep(t(false), [], "Boolean");
	a.deep(t(-Infinity), [], "Inifity");
	a.deep(t(-0), [], "-0");
	a.deep(t(+0), [], "+0");
	a.deep(t(1), [], "1");
	a.deep(t(Number(Infinity)), [], "+Infinity");
	a.deep(t({}), [], "Plain object");
	a.deep(t({ length: 1 }), [undefined], "Sparse array-like");
	a.deep(
		t({ 0: "a", 1: "b", length: 2 }, function (x) {
			return x + x;
		}),
		["aa", "bb"],
		"Map"
	);
	a.deep(
		t(
			{ 0: "a", 1: "b", length: 2 },
			function () {
				return String(this);
			},
			undefined
		),
		["undefined", "undefined"],
		"Map context"
	);
	a.deep(
		t(
			{ 0: "a", 1: "b", length: 2 },
			function () {
				return String(this);
			},
			"x"
		),
		["x", "x"],
		"Map primitive context"
	);
	a.throws(
		function () {
			t({}, "foo", "x");
		},
		TypeError,
		"Non callable for map"
	);

	a.deep(t({ length: 1, 0: "a" }), ["a"], "Null context");

	a(t({ __proto__: { 0: "abc", length: 1 } })[0], "abc", "Values on prototype");

	a.throws(
		function () {
			t.call(function () {
				return Object.freeze({});
			}, {});
		},
		TypeError,
		"Contructor producing freezed objects"
	);

	// Ensure no setters are called for the indexes
	// Ensure no setters are called for the indexes
	MyType = function () {};
	Object.defineProperty(MyType.prototype, "0", {
		set: function (x) {
			throw new Error("Setter called: " + x);
		}
	});
	a.deep(t.call(MyType, { 0: "abc", length: 1 }), { 0: "abc", length: 1 }, "Defined not set");
};
