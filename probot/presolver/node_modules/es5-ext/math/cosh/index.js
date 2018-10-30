"use strict";

module.exports = require("./is-implemented")()
	? Math.cosh
	: require("./shim");
