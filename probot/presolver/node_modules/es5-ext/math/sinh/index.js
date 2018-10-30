"use strict";

module.exports = require("./is-implemented")()
	? Math.sinh
	: require("./shim");
