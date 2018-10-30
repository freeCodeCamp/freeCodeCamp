"use strict";

module.exports = function () {
	var log10 = Math.log10;
	if (typeof log10 !== "function") return false;
	return log10(2) === 0.3010299956639812;
};
