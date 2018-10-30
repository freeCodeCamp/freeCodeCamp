"use strict";

module.exports = function (t, a) {
	var it = t.call("r💩z");
	a.deep(it.next(), { done: false, value: "r" }, "#1");
	a.deep(it.next(), { done: false, value: "💩" }, "#2");
	a.deep(it.next(), { done: false, value: "z" }, "#3");
	a.deep(it.next(), { done: true, value: undefined }, "End");
};
