"use strict";

module.exports = require("./is-implemented")()
	? RegExp.prototype.match
	: require("./shim");
