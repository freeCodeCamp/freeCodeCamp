"use strict";

var iteratorSymbol = require("es6-symbol").iterator;

module.exports = function () {
	var arr = ["foo", 1], iterator, result;
	if (typeof arr[iteratorSymbol] !== "function") return false;
	iterator = arr[iteratorSymbol]();
	if (!iterator) return false;
	if (typeof iterator.next !== "function") return false;
	result = iterator.next();
	if (!result) return false;
	if (result.value !== "foo") return false;
	if (result.done !== false) return false;
	return true;
};
