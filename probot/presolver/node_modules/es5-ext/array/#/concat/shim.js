"use strict";

var isPlainArray       = require("../../is-plain-array")
  , toPosInt           = require("../../../number/to-pos-integer")
  , isObject           = require("../../../object/is-object")
  , isConcatSpreadable = require("es6-symbol").isConcatSpreadable
  , isArray            = Array.isArray
  , concat             = Array.prototype.concat
  , forEach            = Array.prototype.forEach
  , isSpreadable;

isSpreadable = function (value) {
	if (!value) return false;
	if (!isObject(value)) return false;
	if (value[isConcatSpreadable] !== undefined) {
		return Boolean(value[isConcatSpreadable]);
	}
	return isArray(value);
};

// eslint-disable-next-line no-unused-vars
module.exports = function (item /*, …items*/) {
	var result;
	if (!this || !isArray(this) || isPlainArray(this)) {
		return concat.apply(this, arguments);
	}
	result = new this.constructor();
	if (isSpreadable(this)) {
		forEach.call(this, function (val, i) {
			result[i] = val;
		});
	} else {
		result[0] = this;
	}
	forEach.call(arguments, function (arg) {
		var base;
		if (isSpreadable(arg)) {
			base = result.length;
			result.length += toPosInt(arg.length);
			forEach.call(arg, function (val, i) {
				result[base + i] = val;
			});
			return;
		}
		result.push(arg);
	});
	return result;
};
