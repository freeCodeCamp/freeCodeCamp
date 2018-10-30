"use strict";

var lastIndex = require("./last-index");

module.exports = function () {
	var i;
	if ((i = lastIndex.call(this)) !== null) return this[i];
	return undefined;
};
