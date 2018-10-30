"use strict";

var ensurePlainFunction = require("../../object/ensure-plain-function")
  , defineLength        = require("../_define-length")
  , nextTick            = require("next-tick");

var apply = Function.prototype.apply;

module.exports = function () {
	var src = ensurePlainFunction(this);
	return defineLength(function () {
		nextTick(apply.bind(src, this, arguments));
	}, this.length);
};
