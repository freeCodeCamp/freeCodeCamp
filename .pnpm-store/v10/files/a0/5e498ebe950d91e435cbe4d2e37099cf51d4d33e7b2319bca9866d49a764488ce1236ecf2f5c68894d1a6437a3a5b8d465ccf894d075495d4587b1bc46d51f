'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (typeof Iterator === 'function' && typeof Iterator.prototype.filter === 'function') {
		try {
			// https://issues.chromium.org/issues/336839115
			Iterator.prototype.filter.call({ next: null }, function () {}).next();
		} catch (e) {
			return Iterator.prototype.filter;
		}
	}
	return implementation;
};
