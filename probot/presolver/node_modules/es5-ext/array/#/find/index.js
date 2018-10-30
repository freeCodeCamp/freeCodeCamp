"use strict";

module.exports = require("./is-implemented")()
		? Array.prototype.find : require("./shim");
