"use strict";

var isValue = require("./is-value");

module.exports = function (value) {
	if (!isValue(value)) return false;
	try { return !isNaN(value); }
	catch (e) { return false; }
};
