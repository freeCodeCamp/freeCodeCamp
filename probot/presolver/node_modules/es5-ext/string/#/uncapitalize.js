"use strict";

var ensureStringifiable = require("../../object/validate-stringifiable-value");

module.exports = function () {
	var str = ensureStringifiable(this);
	return str.charAt(0).toLowerCase() + str.slice(1);
};
