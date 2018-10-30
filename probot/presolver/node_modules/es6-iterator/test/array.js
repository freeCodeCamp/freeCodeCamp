"use strict";

var iteratorSymbol = require("es6-symbol").iterator;

module.exports = function (T) {
	return {
		"Values": function (a) {
			var x = ["raz", "dwa", "trzy", "cztery", "pięć", "sześć"], it;

			it = new T(x);
			a(it[iteratorSymbol](), it, "@@iterator");
			a.deep(it.next(), { done: false, value: "raz" }, "#1");
			a.deep(it.next(), { done: false, value: "dwa" }, "#2");
			x.splice(1, 0, "elo");
			a.deep(it.next(), { done: false, value: "dwa" }, "Insert");
			a.deep(it.next(), { done: false, value: "trzy" }, "#3");
			a.deep(it.next(), { done: false, value: "cztery" }, "#4");
			x.pop();
			a.deep(it.next(), { done: false, value: "pięć" }, "#5");
			a.deep(it.next(), { done: true, value: undefined }, "End");
		},
		"Keys & Values": function (a) {
			var x = ["raz", "dwa", "trzy", "cztery", "pięć", "sześć"], it;

			it = new T(x, "key+value");
			a(it[iteratorSymbol](), it, "@@iterator");
			a.deep(it.next(), { done: false, value: [0, "raz"] }, "#1");
			a.deep(it.next(), { done: false, value: [1, "dwa"] }, "#2");
			x.splice(1, 0, "elo");
			a.deep(it.next(), { done: false, value: [2, "dwa"] }, "Insert");
			a.deep(it.next(), { done: false, value: [3, "trzy"] }, "#3");
			a.deep(it.next(), { done: false, value: [4, "cztery"] }, "#4");
			x.pop();
			a.deep(it.next(), { done: false, value: [5, "pięć"] }, "#5");
			a.deep(it.next(), { done: true, value: undefined }, "End");
		},
		"Keys": function (a) {
			var x = ["raz", "dwa", "trzy", "cztery", "pięć", "sześć"], it;

			it = new T(x, "key");
			a(it[iteratorSymbol](), it, "@@iterator");
			a.deep(it.next(), { done: false, value: 0 }, "#1");
			a.deep(it.next(), { done: false, value: 1 }, "#2");
			x.splice(1, 0, "elo");
			a.deep(it.next(), { done: false, value: 2 }, "Insert");
			a.deep(it.next(), { done: false, value: 3 }, "#3");
			a.deep(it.next(), { done: false, value: 4 }, "#4");
			x.pop();
			a.deep(it.next(), { done: false, value: 5 }, "#5");
			a.deep(it.next(), { done: true, value: undefined }, "End");
		},
		"Sparse": function (a) {
			var x = new Array(6), it;

			x[2] = "raz";
			x[4] = "dwa";
			it = new T(x);
			a.deep(it.next(), { done: false, value: undefined }, "#1");
			a.deep(it.next(), { done: false, value: undefined }, "#2");
			a.deep(it.next(), { done: false, value: "raz" }, "#3");
			a.deep(it.next(), { done: false, value: undefined }, "#4");
			a.deep(it.next(), { done: false, value: "dwa" }, "#5");
			a.deep(it.next(), { done: false, value: undefined }, "#6");
			a.deep(it.next(), { done: true, value: undefined }, "End");
		}
	};
};
