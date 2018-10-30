"use strict";

var isNatural = require("../number/is-natural");

module.exports = function (arg) {
	return isNatural(Number(arg));
};
