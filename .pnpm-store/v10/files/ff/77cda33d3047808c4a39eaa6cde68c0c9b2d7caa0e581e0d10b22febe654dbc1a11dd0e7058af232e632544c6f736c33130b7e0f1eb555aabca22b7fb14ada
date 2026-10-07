"use strict";

var iteratorSymbol = require("es6-symbol").iterator;

module.exports = function () {
	var str = "🙈f", iterator, result;
	if (typeof str[iteratorSymbol] !== "function") return false;
	iterator = str[iteratorSymbol]();
	if (!iterator) return false;
	if (typeof iterator.next !== "function") return false;
	result = iterator.next();
	if (!result) return false;
	if (result.value !== "🙈") return false;
	if (result.done !== false) return false;
	return true;
};
