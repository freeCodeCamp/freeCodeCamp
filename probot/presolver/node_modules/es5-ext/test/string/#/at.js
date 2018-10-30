/* eslint no-useless-call: "off" */
// See tests at https://github.com/mathiasbynens/String.prototype.at

"use strict";

module.exports = function (t, a) {
	a(t.length, 1, "Length");

	a.h1("BMP");
	a(t.call("abc\uD834\uDF06def", -Infinity), "", "-Infinity");
	a(t.call("abc\uD834\uDF06def", -1), "", "-1");
	a(t.call("abc\uD834\uDF06def", -0), "a", "-0");
	a(t.call("abc\uD834\uDF06def", +0), "a", "+0");
	a(t.call("abc\uD834\uDF06def", 1), "b", "1");
	a(t.call("abc\uD834\uDF06def", 3), "\uD834\uDF06", "3");
	a(t.call("abc\uD834\uDF06def", 4), "\uDF06", "4");
	a(t.call("abc\uD834\uDF06def", 5), "d", "5");
	a(t.call("abc\uD834\uDF06def", 42), "", "42");
	a(t.call("abc\uD834\uDF06def", Number(Infinity)), "", "+Infinity");
	a(t.call("abc\uD834\uDF06def", null), "a", "null");
	a(t.call("abc\uD834\uDF06def", undefined), "a", "undefined");
	a(t.call("abc\uD834\uDF06def"), "a", "No argument");
	a(t.call("abc\uD834\uDF06def", false), "a", "false");
	a(t.call("abc\uD834\uDF06def", NaN), "a", "NaN");
	a(t.call("abc\uD834\uDF06def", ""), "a", "Empty string");
	a(t.call("abc\uD834\uDF06def", "_"), "a", "_");
	a(t.call("abc\uD834\uDF06def", "1"), "b", "'1'");
	a(t.call("abc\uD834\uDF06def", []), "a", "[]");
	a(t.call("abc\uD834\uDF06def", {}), "a", "{}");
	a(t.call("abc\uD834\uDF06def", -0.9), "a", "-0.9");
	a(t.call("abc\uD834\uDF06def", 1.9), "b", "1.9");
	a(t.call("abc\uD834\uDF06def", 7.9), "f", "7.9");
	a(t.call("abc\uD834\uDF06def", Math.pow(2, 32)), "", "Big number");

	a.h1("Astral symbol");
	a(t.call("\uD834\uDF06def", -Infinity), "", "-Infinity");
	a(t.call("\uD834\uDF06def", -1), "", "-1");
	a(t.call("\uD834\uDF06def", -0), "\uD834\uDF06", "-0");
	a(t.call("\uD834\uDF06def", +0), "\uD834\uDF06", "+0");
	a(t.call("\uD834\uDF06def", 1), "\uDF06", "1");
	a(t.call("\uD834\uDF06def", 2), "d", "2");
	a(t.call("\uD834\uDF06def", 3), "e", "3");
	a(t.call("\uD834\uDF06def", 4), "f", "4");
	a(t.call("\uD834\uDF06def", 42), "", "42");
	a(t.call("\uD834\uDF06def", Number(Infinity)), "", "+Infinity");
	a(t.call("\uD834\uDF06def", null), "\uD834\uDF06", "null");
	a(t.call("\uD834\uDF06def", undefined), "\uD834\uDF06", "undefined");
	a(t.call("\uD834\uDF06def"), "\uD834\uDF06", "No arguments");
	a(t.call("\uD834\uDF06def", false), "\uD834\uDF06", "false");
	a(t.call("\uD834\uDF06def", NaN), "\uD834\uDF06", "NaN");
	a(t.call("\uD834\uDF06def", ""), "\uD834\uDF06", "Empty string");
	a(t.call("\uD834\uDF06def", "_"), "\uD834\uDF06", "_");
	a(t.call("\uD834\uDF06def", "1"), "\uDF06", "'1'");

	a.h1("Lone high surrogates");
	a(t.call("\uD834abc", -Infinity), "", "-Infinity");
	a(t.call("\uD834abc", -1), "", "-1");
	a(t.call("\uD834abc", -0), "\uD834", "-0");
	a(t.call("\uD834abc", +0), "\uD834", "+0");
	a(t.call("\uD834abc", 1), "a", "1");
	a(t.call("\uD834abc", 42), "", "42");
	a(t.call("\uD834abc", Number(Infinity)), "", "Infinity");
	a(t.call("\uD834abc", null), "\uD834", "null");
	a(t.call("\uD834abc", undefined), "\uD834", "undefined");
	a(t.call("\uD834abc"), "\uD834", "No arguments");
	a(t.call("\uD834abc", false), "\uD834", "false");
	a(t.call("\uD834abc", NaN), "\uD834", "NaN");
	a(t.call("\uD834abc", ""), "\uD834", "Empty string");
	a(t.call("\uD834abc", "_"), "\uD834", "_");
	a(t.call("\uD834abc", "1"), "a", "'a'");

	a.h1("Lone low surrogates");
	a(t.call("\uDF06abc", -Infinity), "", "-Infinity");
	a(t.call("\uDF06abc", -1), "", "-1");
	a(t.call("\uDF06abc", -0), "\uDF06", "-0");
	a(t.call("\uDF06abc", +0), "\uDF06", "+0");
	a(t.call("\uDF06abc", 1), "a", "1");
	a(t.call("\uDF06abc", 42), "", "42");
	a(t.call("\uDF06abc", Number(Infinity)), "", "+Infinity");
	a(t.call("\uDF06abc", null), "\uDF06", "null");
	a(t.call("\uDF06abc", undefined), "\uDF06", "undefined");
	a(t.call("\uDF06abc"), "\uDF06", "No arguments");
	a(t.call("\uDF06abc", false), "\uDF06", "false");
	a(t.call("\uDF06abc", NaN), "\uDF06", "NaN");
	a(t.call("\uDF06abc", ""), "\uDF06", "Empty string");
	a(t.call("\uDF06abc", "_"), "\uDF06", "_");
	a(t.call("\uDF06abc", "1"), "a", "'1'");

	a.h1("Context");
	a.throws(
		function () {
			t.call(undefined);
		},
		TypeError,
		"Undefined"
	);
	a.throws(
		function () {
			t.call(undefined, 4);
		},
		TypeError,
		"Undefined + argument"
	);
	a.throws(
		function () {
			t.call(null);
		},
		TypeError,
		"Null"
	);
	a.throws(
		function () {
			t.call(null, 4);
		},
		TypeError,
		"Null + argument"
	);
	a(t.call(42, 0), "4", "Number #1");
	a(t.call(42, 1), "2", "Number #2");
	a(
		t.call(
			{
				toString: function () {
					return "abc";
				}
			},
			2
		),
		"c",
		"Object"
	);
};
