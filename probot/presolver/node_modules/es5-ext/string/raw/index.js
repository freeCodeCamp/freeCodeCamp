"use strict";

module.exports = require("./is-implemented")()
	? String.raw
	: require("./shim");
