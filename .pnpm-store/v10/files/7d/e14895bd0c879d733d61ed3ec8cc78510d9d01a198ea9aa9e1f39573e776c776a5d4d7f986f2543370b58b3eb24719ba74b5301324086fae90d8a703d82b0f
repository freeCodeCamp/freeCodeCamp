'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (typeof Iterator === 'function' && typeof Iterator.prototype.drop === 'function') {
		try {
			// https://issues.chromium.org/issues/336839115
			Iterator.prototype.drop.call({ next: null }, 0).next();
		} catch (e) {
			return Iterator.prototype.drop;
		}
	}
	return implementation;
};
