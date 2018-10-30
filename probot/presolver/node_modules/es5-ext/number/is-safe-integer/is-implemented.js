"use strict";

module.exports = function () {
	var isSafeInteger = Number.isSafeInteger;
	if (typeof isSafeInteger !== "function") return false;
	return !isSafeInteger("23") && isSafeInteger(34232322323) &&
			!isSafeInteger(9007199254740992);
};
