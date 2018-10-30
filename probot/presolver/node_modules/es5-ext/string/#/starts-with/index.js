"use strict";

module.exports = require("./is-implemented")()
	? String.prototype.startsWith
	: require("./shim");
