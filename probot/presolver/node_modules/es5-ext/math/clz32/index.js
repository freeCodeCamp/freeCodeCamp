"use strict";

module.exports = require("./is-implemented")()
	? Math.clz32
	: require("./shim");
