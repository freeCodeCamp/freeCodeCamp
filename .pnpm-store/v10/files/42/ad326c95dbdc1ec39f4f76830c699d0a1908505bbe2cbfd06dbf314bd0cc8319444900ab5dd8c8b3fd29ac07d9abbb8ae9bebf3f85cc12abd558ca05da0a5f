"use strict";

var value = require("./valid-value")
  , mixin = require("./mixin");

var getPrototypeOf = Object.getPrototypeOf;

module.exports = function (target, source) {
	target = Object(value(target));
	source = Object(value(source));
	if (target === source) return target;

	var sources = [];
	while (source && !isPrototypeOf.call(source, target)) {
		sources.unshift(source);
		source = getPrototypeOf(source);
	}

	var error;
	sources.forEach(function (sourceProto) {
		try { mixin(target, sourceProto); } catch (mixinError) { error = mixinError; }
	});
	if (error) throw error;
	return target;
};
