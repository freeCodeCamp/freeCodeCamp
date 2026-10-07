/*! https://mths.be/repeat v1.0.0 by @mathias */

'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimRepeat() {
	var polyfill = getPolyfill();

	if (String.prototype.repeat !== polyfill) {
		define(String.prototype, { repeat: polyfill });
	}

	return polyfill;
};
