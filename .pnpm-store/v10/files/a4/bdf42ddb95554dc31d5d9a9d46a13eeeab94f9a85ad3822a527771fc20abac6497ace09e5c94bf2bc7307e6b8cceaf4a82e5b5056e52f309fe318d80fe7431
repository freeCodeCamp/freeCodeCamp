"use strict";

module.exports = function () {
	var arr = [1, 2, 3, 4, 5];
	if (typeof arr.copyWithin !== "function") return false;
	return String(arr.copyWithin(1, 3)) === "1,4,5,4,5";
};
