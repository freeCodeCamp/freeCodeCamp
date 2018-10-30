"use strict";

var isPlainArray = require("../../is-plain-array")
  , callable     = require("../../../object/valid-callable")
  , isArray      = Array.isArray
  , filter       = Array.prototype.filter
  , forEach      = Array.prototype.forEach
  , call         = Function.prototype.call;

module.exports = function (callbackFn /*, thisArg*/) {
	var result, thisArg, i;
	if (!this || !isArray(this) || isPlainArray(this)) {
		return filter.apply(this, arguments);
	}
	callable(callbackFn);
	thisArg = arguments[1];
	result = new this.constructor();
	i = 0;
	forEach.call(this, function (val, j, self) {
		if (call.call(callbackFn, thisArg, val, j, self)) result[i++] = val;
	});
	return result;
};
