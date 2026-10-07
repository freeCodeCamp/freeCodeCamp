'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (typeof Iterator === 'function' && typeof Iterator.prototype.map === 'function') {
		try {
			// https://issues.chromium.org/issues/336839115
			Iterator.prototype.map.call({ next: null }, function () {}).next();
		} catch (e) {
			return Iterator.prototype.map;
		}
	}
	return implementation;
};
