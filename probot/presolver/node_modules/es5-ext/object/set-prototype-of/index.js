"use strict";

module.exports = require("./is-implemented")()
	? Object.setPrototypeOf
	: require("./shim");
