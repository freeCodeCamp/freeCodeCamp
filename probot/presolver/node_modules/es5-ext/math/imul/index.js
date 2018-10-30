"use strict";

module.exports = require("./is-implemented")()
	? Math.imul
	: require("./shim");
