"use strict";

module.exports = function (value) {
	try { value = Number(value); }
	catch (e) { return false; }
	if (isNaN(value)) return false;
	if (Math.abs(value) > 8.64e15) return false;
	return true;
};
