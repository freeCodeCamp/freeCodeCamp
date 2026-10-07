"use strict";

var isValue       = require("es5-ext/object/is-value")
  , isPromise     = require("es5-ext/object/is-promise")
  , nextTick      = require("next-tick")
  , ensureTimeout = require("../valid-timeout");

module.exports = function (/* timeout */) {
	var Constructor = isPromise(this) ? this.constructor : Promise;
	var timeout = arguments[0];
	if (isValue(timeout)) timeout = ensureTimeout(timeout);
	return new Constructor(function (resolve) {
		if (isValue(timeout)) {
			setTimeout(function () {
				resolve();
			}, timeout);
		} else {
			nextTick(resolve);
		}
	});
};
