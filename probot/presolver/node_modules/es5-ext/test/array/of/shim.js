/* eslint no-useless-call: "off" */
// Most tests taken from https://github.com/mathiasbynens/Array.of/blob/master/tests/tests.js
// Thanks @mathiasbynens

"use strict";

var defineProperty = Object.defineProperty;

module.exports = function (t, a) {
	var x = {}, testObject, MyType;

	a.deep(t(), [], "No arguments");
	a.deep(t(3), [3], "One numeric argument");
	a.deep(t(3, "raz", null, x, undefined), [3, "raz", null, x, undefined], "Many arguments");

	a(t.length, 0, "Length");

	a.deep(t("abc"), ["abc"], "String");
	a.deep(t(undefined), [undefined], "Undefined");
	a.deep(t(null), [null], "Null");
	a.deep(t(false), [false], "Boolean");
	a.deep(t(-Infinity), [-Infinity], "Infinity");
	a.deep(t(-0), [-0], "-0");
	a.deep(t(+0), [+0], "+0");
	a.deep(t(1), [1], "1");
	a.deep(t(1, 2, 3), [1, 2, 3], "Numeric args");
	a.deep(t(Number(Infinity)), [Number(Infinity)], "+Infinity");
	a.deep(
		t({ 0: "a", 1: "b", 2: "c", length: 3 }),
		[{ 0: "a", 1: "b", 2: "c", length: 3 }],
		"Array like"
	);
	a.deep(
		t(undefined, null, false, -Infinity, -0, +0, 1, 2, Number(Infinity)),
		[undefined, null, false, -Infinity, -0, +0, 1, 2, Number(Infinity)],
		"Falsy arguments"
	);

	a.h1("Null context");
	a.deep(t.call(null, "abc"), ["abc"], "String");
	a.deep(t.call(null, undefined), [undefined], "Undefined");
	a.deep(t.call(null, null), [null], "Null");
	a.deep(t.call(null, false), [false], "Boolean");
	a.deep(t.call(null, -Infinity), [-Infinity], "-Infinity");
	a.deep(t.call(null, -0), [-0], "-0");
	a.deep(t.call(null, +0), [+0], "+0");
	a.deep(t.call(null, 1), [1], "1");
	a.deep(t.call(null, 1, 2, 3), [1, 2, 3], "Numeric");
	a.deep(t.call(null, Number(Infinity)), [Number(Infinity)], "+Infinity");
	a.deep(
		t.call(null, { 0: "a", 1: "b", 2: "c", length: 3 }),
		[{ 0: "a", 1: "b", 2: "c", length: 3 }],
		"Array-like"
	);
	a.deep(
		t.call(null, undefined, null, false, -Infinity, -0, +0, 1, 2, Number(Infinity)),
		[undefined, null, false, -Infinity, -0, +0, 1, 2, Number(Infinity)],
		"Falsy"
	);

	a.h1("Other constructor context");
	a.deep(t.call(Object, 1, 2, 3), { 0: 1, 1: 2, 2: 3, length: 3 }, "Many arguments");

	testObject = Object(3);
	testObject[0] = 1;
	testObject[1] = 2;
	testObject[2] = 3;
	testObject.length = 3;
	a.deep(t.call(Object, 1, 2, 3), testObject, "Test object");
	a(t.call(Object).length, 0, "No arguments");
	a.throws(
		function () {
			t.call(function () {
				return Object.freeze({});
			});
		},
		TypeError,
		"Frozen instance"
	);

	// Ensure no setters are called for the indexes
	MyType = function () {};
	defineProperty(MyType.prototype, "0", {
		set: function (x) {
			throw new Error("Setter called: " + x);
		}
	});
	a.deep(t.call(MyType, "abc"), { 0: "abc", length: 1 }, "Define, not set");
};
