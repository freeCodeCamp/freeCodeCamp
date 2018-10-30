"use strict";

module.exports = require("./is-implemented")()
	? Number.isNaN
	: require("./shim");
