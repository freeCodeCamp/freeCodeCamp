"use strict";

module.exports = require("./is-implemented")()
	? Math.atanh
	: require("./shim");
