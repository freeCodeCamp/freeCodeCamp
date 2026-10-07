"use strict";

var str = "æøåäüö";

module.exports = function () {
	if (typeof str.normalize !== "function") return false;
	return str.normalize("NFKD") === "æøåäüö";
};
