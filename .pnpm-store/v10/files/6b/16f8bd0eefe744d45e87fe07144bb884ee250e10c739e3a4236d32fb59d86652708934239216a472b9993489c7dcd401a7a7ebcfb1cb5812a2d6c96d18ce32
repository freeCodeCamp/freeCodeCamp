"use strict";

var filter  = require("./filter")
  , isValue = require("./is-value");

module.exports = function (obj) {
	return filter(obj, function (val) { return isValue(val); });
};
