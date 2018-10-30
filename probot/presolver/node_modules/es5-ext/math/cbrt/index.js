"use strict";

module.exports = require("./is-implemented")()
	? Math.cbrt
	: require("./shim");
