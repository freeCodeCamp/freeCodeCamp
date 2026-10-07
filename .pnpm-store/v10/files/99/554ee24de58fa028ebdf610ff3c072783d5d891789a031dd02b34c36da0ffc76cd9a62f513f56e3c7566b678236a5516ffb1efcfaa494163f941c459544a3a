/*! https://mths.be/includes v2.0.0 by @mathias */

'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimIncludes() {
	var polyfill = getPolyfill();

	if (String.prototype.includes !== polyfill) {
		define(String.prototype, { includes: polyfill });
	}

	return polyfill;
};
