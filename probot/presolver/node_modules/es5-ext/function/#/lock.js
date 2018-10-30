"use strict";

var callable = require("../../object/valid-callable")

  , apply    = Function.prototype.apply;

module.exports = function (/* …args*/) {
	var fn = callable(this)
	  , args = arguments;

	return function () {
 return apply.call(fn, this, args);
};
};
