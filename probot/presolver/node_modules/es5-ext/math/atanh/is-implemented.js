"use strict";

module.exports = function () {
	var atanh = Math.atanh;
	if (typeof atanh !== "function") return false;
	return Math.round(atanh(0.5) * 1e15) === 549306144334055;
};
