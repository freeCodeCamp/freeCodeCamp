'use strict';

var define = require('define-properties');
var gOPD = require('gopd');
var getPolyfill = require('./polyfill');

module.exports = function shimGlobal() {
	var polyfill = getPolyfill();
	if (define.supportsDescriptors) {
		var descriptor = gOPD(polyfill, 'globalThis');
		if (
			!descriptor
			|| (
				descriptor.configurable
				&& (descriptor.enumerable || !descriptor.writable || globalThis !== polyfill)
			)
		) {
			Object.defineProperty(polyfill, 'globalThis', {
				configurable: true,
				enumerable: false,
				value: polyfill,
				writable: true
			});
		}
	} else if (typeof globalThis !== 'object' || globalThis !== polyfill) {
		polyfill.globalThis = polyfill;
	}
	return polyfill;
};
