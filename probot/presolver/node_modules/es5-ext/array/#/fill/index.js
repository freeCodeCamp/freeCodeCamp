"use strict";

module.exports = require("./is-implemented")()
		? Array.prototype.fill : require("./shim");
