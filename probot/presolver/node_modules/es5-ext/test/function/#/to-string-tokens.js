/* eslint no-eval: "off" */

"use strict";

module.exports = function (t, a) {
	a.deep(
		t.call(function (a, b) {
			return this[a] + this[b];
		}),
		{ args: "a, b", body: "\n\t\t\treturn this[a] + this[b];\n\t\t" }
	);
	a.deep(t.call(function () {}), { args: "", body: "" });
	// eslint-disable-next-line no-unused-vars
	a.deep(t.call(function (raz) {}), { args: "raz", body: "" });
	a.deep(
		t.call(function () {
			Object();
		}),
		{ args: "", body: "\n\t\t\tObject();\n\t\t" }
	);

	try {
		eval("(() => {})");
	} catch (e) {
		// Non ES2015 env
		return;
	}

	a.deep(t.call(eval("(() => {})")), { args: "", body: "" });
	a.deep(t.call(eval("((elo) => foo)")), { args: "elo", body: "foo" });
	a.deep(t.call(eval("(elo => foo)")), { args: "elo", body: "foo" });
	a.deep(t.call(eval("((elo, bar) => foo())")), { args: "elo, bar", body: "foo()" });
};
