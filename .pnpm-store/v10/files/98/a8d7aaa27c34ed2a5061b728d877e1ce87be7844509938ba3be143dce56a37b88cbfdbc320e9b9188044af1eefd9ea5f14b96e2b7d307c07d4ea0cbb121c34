"use strict";

var toPosInt     = require("../../number/to-pos-integer")
  , callable     = require("../../object/valid-callable")
  , defineLength = require("../_define-length")
  , slice        = Array.prototype.slice
  , apply        = Function.prototype.apply
  , curry;

curry = function self(fn, length, preArgs) {
	return defineLength(
		function () {
			var args = preArgs
				? preArgs.concat(slice.call(arguments, 0, length - preArgs.length))
				: slice.call(arguments, 0, length);
			return args.length === length ? apply.call(fn, this, args) : self(fn, length, args);
		},
		preArgs ? length - preArgs.length : length
	);
};

module.exports = function (/* Length*/) {
	var length = arguments[0];
	return curry(callable(this), isNaN(length) ? toPosInt(this.length) : toPosInt(length));
};
