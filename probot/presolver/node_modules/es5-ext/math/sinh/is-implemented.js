"use strict";

module.exports = function () {
	var sinh = Math.sinh;
	if (typeof sinh !== "function") return false;
	return (sinh(1) === 1.1752011936438014) && (sinh(Number.MIN_VALUE) === 5e-324);
};
