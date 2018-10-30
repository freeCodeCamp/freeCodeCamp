"use strict";

var validRegExp = require("../../valid-reg-exp");

module.exports = function (string) {
	validRegExp(this);
	return String(string).match(this);
};
