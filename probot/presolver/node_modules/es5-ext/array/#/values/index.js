"use strict";

module.exports = require("./is-implemented")() ? Array.prototype.values : require("./shim");
