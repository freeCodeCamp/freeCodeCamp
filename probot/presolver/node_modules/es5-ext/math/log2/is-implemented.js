"use strict";

module.exports = function () {
	var log2 = Math.log2;
	if (typeof log2 !== "function") return false;
	return log2(3).toFixed(15) === "1.584962500721156";
};
