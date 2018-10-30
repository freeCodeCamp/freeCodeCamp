"use strict";

module.exports = function () {
	var arr = [1, "foo"], iterator, result;
	if (typeof arr.keys !== "function") return false;
	iterator = arr.keys();
	if (!iterator) return false;
	if (typeof iterator.next !== "function") return false;
	result = iterator.next();
	if (!result) return false;
	if (result.value !== 0) return false;
	if (result.done !== false) return false;
	return true;
};
