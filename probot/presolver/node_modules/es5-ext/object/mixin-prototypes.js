"use strict";

var value                    = require("./valid-value")
  , mixin                    = require("./mixin")
  , defineProperty           = Object.defineProperty
  , getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
  , getOwnPropertyNames      = Object.getOwnPropertyNames
  , getPrototypeOf           = Object.getPrototypeOf
  , objHasOwnProperty        = Object.prototype.hasOwnProperty;

module.exports = function (target, source) {
	var error, end, define;
	target = Object(value(target));
	source = Object(value(source));
	end = getPrototypeOf(target);
	if (source === end) return target;
	try {
		mixin(target, source);
	} catch (e) {
		error = e;
	}
	source = getPrototypeOf(source);
	define = function (name) {
		if (objHasOwnProperty.call(target, name)) return;
		try {
			defineProperty(target, name, getOwnPropertyDescriptor(source, name));
		} catch (e) {
			error = e;
		}
	};
	while (source && source !== end) {
		getOwnPropertyNames(source).forEach(define);
		source = getPrototypeOf(source);
	}
	if (error) throw error;
	return target;
};
