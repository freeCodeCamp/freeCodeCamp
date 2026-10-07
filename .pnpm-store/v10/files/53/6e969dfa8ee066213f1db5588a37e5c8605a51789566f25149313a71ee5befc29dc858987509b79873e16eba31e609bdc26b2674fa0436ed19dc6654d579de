"use strict";

var re = /foo/;

module.exports = function () {
	if (typeof re.search !== "function") return false;
	return re.search("barfoo") === 3;
};
