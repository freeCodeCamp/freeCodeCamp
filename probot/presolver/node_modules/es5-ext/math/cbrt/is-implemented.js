"use strict";

module.exports = function () {
	var cbrt = Math.cbrt;
	if (typeof cbrt !== "function") return false;
	return cbrt(2) === 1.2599210498948732;
};
