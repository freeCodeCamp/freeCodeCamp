// Taken from: https://github.com/mathiasbynens/String.fromCodePoint/blob/master
//             /tests/tests.js

"use strict";

var pow = Math.pow;

module.exports = function (t, a) {
	var counter, result;

	a(t.length, 1, "Length");
	a(String.propertyIsEnumerable("fromCodePoint"), false, "Not enumerable");

	a(t(""), "\0", "Empty string");
	a(t(), "", "No arguments");
	a(t(-0), "\0", "-0");
	a(t(0), "\0", "0");
	a(t(0x1D306), "\uD834\uDF06", "Unicode");
	a(t(0x1D306, 0x61, 0x1D307), "\uD834\uDF06a\uD834\uDF07", "Complex unicode");
	a(t(0x61, 0x62, 0x1D307), "ab\uD834\uDF07", "Complex");
	a(t(false), "\0", "false");
	a(t(null), "\0", "null");

	a.throws(function () {
 t("_");
}, RangeError, "_");
	a.throws(function () {
 t(Infinity);
}, RangeError, "Infinity");
	a.throws(function () {
 t(-Infinity);
}, RangeError, "-Infinity");
	a.throws(function () {
 t(-1);
}, RangeError, "-1");
	a.throws(function () {
 t(0x10FFFF + 1);
}, RangeError, "Range error #1");
	a.throws(function () {
 t(3.14);
}, RangeError, "Range error #2");
	a.throws(function () {
 t(3e-2);
}, RangeError, "Range error #3");
	a.throws(function () {
 t(-Infinity);
}, RangeError, "Range error #4");
	a.throws(function () {
 t(Number(Infinity));
}, RangeError, "Range error #5");
	a.throws(function () {
 t(NaN);
}, RangeError, "Range error #6");
	a.throws(function () {
 t(undefined);
}, RangeError, "Range error #7");
	a.throws(function () {
 t({});
}, RangeError, "Range error #8");
	a.throws(function () {
 t(/re/);
}, RangeError, "Range error #9");

	counter = pow(2, 15) * 3 / 2;
	result = [];
	while (--counter >= 0) result.push(0); // One code unit per symbol
	t.apply(null, result); // Must not throw

	counter = pow(2, 15) * 3 / 2;
	result = [];
	while (--counter >= 0) result.push(0xFFFF + 1); // Two code units per symbol
	t.apply(null, result); // Must not throw
};
