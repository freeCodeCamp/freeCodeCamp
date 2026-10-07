"use strict";

var value    = require("../../object/valid-value")
  , aFrom    = require("../from")
  , toArray  = require("../to-array")
  , contains = require("./contains")
  , byLength = require("./_compare-by-length")
  , filter   = Array.prototype.filter
  , push     = Array.prototype.push;

module.exports = function (/* …lists*/) {
	var lists, seen, result;
	if (!arguments.length) return aFrom(this);
	push.apply((lists = [this]), arguments);
	lists.forEach(value);
	seen = [];
	result = [];
	lists.sort(byLength).forEach(function (list) {
		result = result
			.filter(function (item) { return !contains.call(list, item); })
			.concat(filter.call(list, function (item) { return !contains.call(seen, item); }));
		push.apply(seen, toArray(list));
	});
	return result;
};
