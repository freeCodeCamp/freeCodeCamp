"use strict";

var Iterator = require("../../");

module.exports = function (t, a) {
	var i1 = new Iterator(["raz", "dwa", "trzy"])
	  , i2 = new Iterator(["cztery", "pięć", "sześć"])
	  , i3 = new Iterator(["siedem", "osiem", "dziewięć"])

	  , iterator = t.call(i1, i2, i3);

	a.deep(iterator.next(), { done: false, value: "raz" }, "#1");
	a.deep(iterator.next(), { done: false, value: "dwa" }, "#2");
	a.deep(iterator.next(), { done: false, value: "trzy" }, "#3");
	a.deep(iterator.next(), { done: false, value: "cztery" }, "#4");
	a.deep(iterator.next(), { done: false, value: "pięć" }, "#5");
	a.deep(iterator.next(), { done: false, value: "sześć" }, "#6");
	a.deep(iterator.next(), { done: false, value: "siedem" }, "#7");
	a.deep(iterator.next(), { done: false, value: "osiem" }, "#8");
	a.deep(iterator.next(), { done: false, value: "dziewięć" }, "#9");
	a.deep(iterator.next(), { done: true, value: undefined }, "Done #1");
	a.deep(iterator.next(), { done: true, value: undefined }, "Done #2");
};
