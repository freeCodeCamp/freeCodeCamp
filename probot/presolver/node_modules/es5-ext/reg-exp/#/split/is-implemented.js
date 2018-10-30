"use strict";

var re = /\|/;

module.exports = function () {
	if (typeof re.split !== "function") return false;
	return re.split("bar|foo")[1] === "foo";
};
