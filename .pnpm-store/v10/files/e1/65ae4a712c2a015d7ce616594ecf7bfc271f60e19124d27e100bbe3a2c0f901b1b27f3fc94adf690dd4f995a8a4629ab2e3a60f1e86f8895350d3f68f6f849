"use strict";

var callable  = require("./valid-callable")
  , isValue   = require("./is-value")
  , forEach   = require("./for-each")
  , call      = Function.prototype.call
  , defaultCb = function (value, key) { return [key, value]; };

module.exports = function (obj /*, cb, thisArg, compareFn*/) {
	var a = [], cb = arguments[1], thisArg = arguments[2];
	cb = isValue(cb) ? callable(cb) : defaultCb;

	forEach(
		obj,
		function (value, key, targetObj, index) {
			a.push(call.call(cb, thisArg, value, key, this, index));
		},
		obj, arguments[3]
	);
	return a;
};
