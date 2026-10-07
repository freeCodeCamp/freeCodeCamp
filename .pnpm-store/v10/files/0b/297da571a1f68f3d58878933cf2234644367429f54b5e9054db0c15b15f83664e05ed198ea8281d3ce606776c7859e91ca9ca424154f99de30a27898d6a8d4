'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (typeof Iterator === 'function' && typeof Iterator.prototype.flatMap === 'function') {
		try {
			// https://issues.chromium.org/issues/336839115
			Iterator.prototype.flatMap.call({ next: null }, function () {}).next();
		} catch (e) {
			return Iterator.prototype.flatMap;
		}
	}
	return implementation;
};
