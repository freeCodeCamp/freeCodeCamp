"use strict";

var isPlainArray = require("../../is-plain-array")
  , isArray      = Array.isArray
  , splice       = Array.prototype.splice
  , forEach      = Array.prototype.forEach;

// eslint-disable-next-line no-unused-vars
module.exports = function (start, deleteCount /*, …items*/) {
	var arr = splice.apply(this, arguments), result;
	if (!this || !isArray(this) || isPlainArray(this)) return arr;
	result = new this.constructor(arr.length);
	forEach.call(arr, function (val, i) { result[i] = val; });
	return result;
};
