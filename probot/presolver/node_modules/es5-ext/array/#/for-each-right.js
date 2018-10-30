"use strict";

var toPosInt          = require("../../number/to-pos-integer")
  , callable          = require("../../object/valid-callable")
  , value             = require("../../object/valid-value")
  , objHasOwnProperty = Object.prototype.hasOwnProperty
  , call              = Function.prototype.call;

module.exports = function (cb /*, thisArg*/) {
	var i, self, thisArg;

	self = Object(value(this));
	callable(cb);
	thisArg = arguments[1];

	for (i = toPosInt(self.length) - 1; i >= 0; --i) {
		if (objHasOwnProperty.call(self, i)) call.call(cb, thisArg, self[i], i, self);
	}
};
