"use strict";

var ensureString = require("type/string/ensure");

module.exports = function () {
	var input = ensureString(this);
	if (!input) return input;
	return input.charAt(0).toUpperCase() + input.slice(1);
};
