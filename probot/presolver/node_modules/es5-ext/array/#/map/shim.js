"use strict";

var isPlainArray = require("../../is-plain-array")
  , callable     = require("../../../object/valid-callable")

  , isArray = Array.isArray, map = Array.prototype.map
  , forEach = Array.prototype.forEach, call = Function.prototype.call;

module.exports = function (callbackFn/*, thisArg*/) {
	var result, thisArg;
	if (!this || !isArray(this) || isPlainArray(this)) {
		return map.apply(this, arguments);
	}
	callable(callbackFn);
	thisArg = arguments[1];
	result = new this.constructor(this.length);
	forEach.call(this, function (val, i, self) {
		result[i] = call.call(callbackFn, thisArg, val, i, self);
	});
	return result;
};
