"use strict";

module.exports = function () {
	var numberIsFinite = Number.isFinite;
	if (typeof numberIsFinite !== "function") return false;
	return !numberIsFinite("23") && numberIsFinite(34) && !numberIsFinite(Infinity);
};
