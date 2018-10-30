"use strict";

module.exports = function () {
	var fround = Math.fround;
	if (typeof fround !== "function") return false;
	return fround(1.337) === 1.3370000123977661;
};
