"use strict";

module.exports = require("./is-implemented")()
	? String.prototype.normalize
	: require("./shim");
