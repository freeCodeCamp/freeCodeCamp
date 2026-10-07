"use strict";

module.exports = function () {
	var isInteger = Number.isInteger;
	if (typeof isInteger !== "function") return false;
	return !isInteger("23") && isInteger(34) && !isInteger(32.34);
};
