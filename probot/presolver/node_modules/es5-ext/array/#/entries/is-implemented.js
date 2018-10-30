"use strict";

module.exports = function () {
	var arr = [1, "foo"], iterator, result;
	if (typeof arr.entries !== "function") return false;
	iterator = arr.entries();
	if (!iterator) return false;
	if (typeof iterator.next !== "function") return false;
	result = iterator.next();
	if (!result || !result.value) return false;
	if (result.value[0] !== 0) return false;
	if (result.value[1] !== 1) return false;
	if (result.done !== false) return false;
	return true;
};
