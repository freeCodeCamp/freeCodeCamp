"use strict";

var customError   = require("es5-ext/error/custom")
  , isValue       = require("es5-ext/object/is-value")
  , ensurePromise = require("es5-ext/object/ensure-promise")
  , nextTick      = require("next-tick")
  , ensureTimeout = require("../valid-timeout");

module.exports = function (/* timeout */) {
	ensurePromise(this);
	var timeout = arguments[0];
	if (isValue(timeout)) timeout = ensureTimeout(timeout);
	return new this.constructor(
		function (resolve, reject) {
			var isSettled = false, timeoutId;
			var timeoutCallback = function () {
				if (isSettled) return;
				reject(
					customError(
						"Operation timeout (exceeded " +
							(isValue(timeout) ? timeout + "ms" : "tick") +
							")",
						"PROMISE_TIMEOUT"
					)
				);
			};
			if (isValue(timeout)) timeoutId = setTimeout(timeoutCallback, timeout);
			else nextTick(timeoutCallback);
			this.then(
				function (value) {
					isSettled = true;
					clearTimeout(timeoutId);
					resolve(value);
				},
				function (reason) {
					isSettled = true;
					clearTimeout(timeoutId);
					reject(reason);
				}
			);
		}.bind(this)
	);
};
