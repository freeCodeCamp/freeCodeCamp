'use strict';

var callBound = require('call-bound');

/** @type {undefined | ((value: ThisParameterType<typeof FinalizationRegistry.prototype.register>, ...args: Parameters<typeof FinalizationRegistry.prototype.register>) => ReturnType<typeof FinalizationRegistry.prototype.register>)} */
var $register = callBound('FinalizationRegistry.prototype.register', true);

/** @type {import('.')} */
module.exports = $register
	? function isFinalizationRegistry(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}
		try {
			// @ts-expect-error TS can't figure out that it's always truthy here
			$register(value, {}, null);
			return true;
		} catch (e) {
			return false;
		}
	}
	// @ts-ignore unused var
	: function isFinalizationRegistry(value) { // eslint-disable-line no-unused-vars
		return false;
	};
