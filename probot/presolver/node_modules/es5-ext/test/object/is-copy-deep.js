"use strict";

module.exports = function (t, a) {
	var x, y;

	a(t({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2, 3: 3 }), true, "Same");
	a(t({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2, 3: 4 }), false,
		"Different property value");
	a(t({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2 }), false,
		"Property only in source");
	a(t({ 1: 1, 2: 2 }, { 1: 1, 2: 2, 3: 4 }), false,
		"Property only in target");

	a(t("raz", "dwa"), false, "String: diff");
	a(t("raz", "raz"), true, "String: same");
	a(t("32", 32), false, "String & Number");

	a(t([1, "raz", true], [1, "raz", true]), true, "Array: same");
	a(t([1, "raz", undefined], [1, "raz"]), false, "Array: diff");
	a(t(["foo"], ["one"]), false, "Array: One value comparision");

	x = { foo: { bar: { mar: {} } } };
	y = { foo: { bar: { mar: {} } } };
	a(t(x, y), true, "Deep");

	a(t({ foo: { bar: { mar: "foo" } } }, { foo: { bar: { mar: {} } } }),
		false, "Deep: false");

	x = { foo: { bar: { mar: {} } } };
	x.rec = { foo: x };

	y = { foo: { bar: { mar: {} } } };
	y.rec = { foo: x };

	a(t(x, y), true, "Object: Infinite Recursion: Same #1");

	x.rec.foo = y;
	a(t(x, y), true, "Object: Infinite Recursion: Same #2");

	x.rec.foo = x;
	y.rec.foo = y;
	a(t(x, y), true, "Object: Infinite Recursion: Same #3");

	y.foo.bar.mar = "raz";
	a(t(x, y), false, "Object: Infinite Recursion: Diff");
};
