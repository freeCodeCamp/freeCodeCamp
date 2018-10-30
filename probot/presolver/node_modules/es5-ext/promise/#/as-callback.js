"use strict";

var ensurePlainFunction = require("../../object/ensure-plain-function")
  , ensureThenable      = require("../../object/ensure-thenable")
  , microtaskDelay      = require("../../function/#/microtask-delay");

module.exports = function (callback) {
	ensureThenable(this);
	ensurePlainFunction(callback);
	// Rely on microtaskDelay to escape eventual error swallowing
	this.then(
		microtaskDelay.call(function (value) {
			callback(null, value);
		}),
		microtaskDelay.call(function (reason) {
			callback(reason);
		})
	);
};
