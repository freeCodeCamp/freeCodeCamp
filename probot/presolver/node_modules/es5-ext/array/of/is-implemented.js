"use strict";

module.exports = function () {
	var of = Array.of, result;
	if (typeof of !== "function") return false;
	result = of("foo", "bar");
	return Boolean(result && (result[1] === "bar"));
};
