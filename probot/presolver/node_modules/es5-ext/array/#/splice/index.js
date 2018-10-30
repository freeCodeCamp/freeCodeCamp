"use strict";

module.exports = require("./is-implemented")()
	? Array.prototype.splice : require("./shim");
