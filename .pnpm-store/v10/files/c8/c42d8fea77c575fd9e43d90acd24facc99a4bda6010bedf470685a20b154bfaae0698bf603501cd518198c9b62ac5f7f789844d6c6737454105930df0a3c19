"use strict";

var value    = require("../../object/valid-value")
  , contains = require("./contains")
  , filter   = Array.prototype.filter;

module.exports = function (other) {
	value(this);
	value(other);
	return filter.call(this, function (item) { return !contains.call(other, item); });
};
