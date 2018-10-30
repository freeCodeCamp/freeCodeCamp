"use strict";

module.exports = function () {
	var arr = ["foo", 1], iterator, result;
	if (typeof arr.values !== "function") return false;
	iterator = arr.values();
	if (!iterator) return false;
	if (typeof iterator.next !== "function") return false;
	result = iterator.next();
	if (!result) return false;
	if (result.value !== "foo") return false;
	if (result.done !== false) return false;
	return true;
};
