"use strict";

module.exports = function () {
	var clz32 = Math.clz32;
	if (typeof clz32 !== "function") return false;
	return clz32(1000) === 22;
};
