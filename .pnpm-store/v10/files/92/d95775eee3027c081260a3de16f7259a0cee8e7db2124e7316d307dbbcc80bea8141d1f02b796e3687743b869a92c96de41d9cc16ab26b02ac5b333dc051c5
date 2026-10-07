"use strict";

var isCallable = require("../object/is-callable")
  , value      = require("../object/valid-value")
  , slice      = Array.prototype.slice
  , apply      = Function.prototype.apply;

module.exports = function (name /*, …args*/) {
	var args = slice.call(arguments, 1), isFn = isCallable(name);
	return function (obj) {
		value(obj);
		return apply.call(isFn ? name : obj[name], obj, args.concat(slice.call(arguments, 1)));
	};
};
