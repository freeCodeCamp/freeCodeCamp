"use strict";

module.exports = function () {
	var fromCodePoint = String.fromCodePoint;
	if (typeof fromCodePoint !== "function") return false;
	return fromCodePoint(0x1D306, 0x61, 0x1D307) === "\ud834\udf06a\ud834\udf07";
};
