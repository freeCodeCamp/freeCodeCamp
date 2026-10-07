"use strict";

module.exports = function () {
	var arr = [1, 2, 3, 4, 5, 6];
	if (typeof arr.fill !== "function") return false;
	return String(arr.fill(-1, -3)) === "1,2,3,-1,-1,-1";
};
