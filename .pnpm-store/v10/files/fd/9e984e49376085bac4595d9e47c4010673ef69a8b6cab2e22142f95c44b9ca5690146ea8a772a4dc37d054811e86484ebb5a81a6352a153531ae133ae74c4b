"use strict";

var callable     = require("../../object/valid-callable")
  , defineLength = require("../_define-length")
  , apply        = Function.prototype.apply;

module.exports = function () {
	var fn = callable(this);

	return defineLength(function () { return !apply.call(fn, this, arguments); }, fn.length);
};
