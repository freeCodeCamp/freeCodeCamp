"use strict";

module.exports = require("./is-implemented")()
	? Math.log2
	: require("./shim");
