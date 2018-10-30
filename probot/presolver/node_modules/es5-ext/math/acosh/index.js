"use strict";

module.exports = require("./is-implemented")()
	? Math.acosh
	: require("./shim");
