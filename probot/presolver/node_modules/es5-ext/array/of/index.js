"use strict";

module.exports = require("./is-implemented")()
	? Array.of
	: require("./shim");
