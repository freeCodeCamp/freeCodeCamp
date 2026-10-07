"use strict";

var ensurePlainFunction = require("type/plain-function/ensure")
  , isThenable          = require("type/thenable/is")
  , ensureThenable      = require("type/thenable/ensure");

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
