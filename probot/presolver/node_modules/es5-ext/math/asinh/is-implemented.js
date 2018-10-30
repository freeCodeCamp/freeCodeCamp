"use strict";

module.exports = function () {
	var asinh = Math.asinh;
	if (typeof asinh !== "function") return false;
	return asinh(2) === 1.4436354751788103;
};
