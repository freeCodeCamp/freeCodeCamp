"use strict";

module.exports = require("./is-implemented")()
	? Array.from
	: require("./shim");
