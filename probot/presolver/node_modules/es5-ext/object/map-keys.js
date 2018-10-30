"use strict";

var callable = require("./valid-callable")
  , forEach  = require("./for-each")
  , call     = Function.prototype.call;

module.exports = function (obj, cb /*, thisArg*/) {
	var result = {}, thisArg = arguments[2];
	callable(cb);
	forEach(
		obj,
		function (value, key, targetObj, index) {
			result[call.call(cb, thisArg, key, value, this, index)] = value;
		},
		obj
	);
	return result;
};
