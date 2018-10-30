"use strict";

module.exports = require("./is-implemented")()
	? Math.asinh
	: require("./shim");
