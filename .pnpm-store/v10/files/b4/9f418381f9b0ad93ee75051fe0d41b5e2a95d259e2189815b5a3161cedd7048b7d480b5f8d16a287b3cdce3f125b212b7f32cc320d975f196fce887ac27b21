"use strict";

var ensurePlainFunction = require("../../../object/ensure-plain-function")
  , isThenable          = require("../../../object/is-thenable")
  , ensureThenable      = require("../../../object/ensure-thenable");

var resolveCallback = function (callback, next) {
	var callbackResult = callback();
	if (!isThenable(callbackResult)) return next();
	return callbackResult.then(next);
};

module.exports = function (callback) {
	ensureThenable(this);
	ensurePlainFunction(callback);
	return this.then(
		function (result) {
			return resolveCallback(callback, function () { return result; });
		},
		function (error) {
			return resolveCallback(callback, function () { throw error; });
		}
	);
};
