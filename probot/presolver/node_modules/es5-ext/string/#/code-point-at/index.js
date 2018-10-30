"use strict";

module.exports = require("./is-implemented")()
	? String.prototype.codePointAt
	: require("./shim");
