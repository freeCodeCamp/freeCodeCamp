"use strict";

var fn = function (value) {
	return value > 3;
};

module.exports = function () {
	var arr = [1, 2, 3, 4, 5, 6];
	if (typeof arr.find !== "function") return false;
	return arr.find(fn) === 4;
};
