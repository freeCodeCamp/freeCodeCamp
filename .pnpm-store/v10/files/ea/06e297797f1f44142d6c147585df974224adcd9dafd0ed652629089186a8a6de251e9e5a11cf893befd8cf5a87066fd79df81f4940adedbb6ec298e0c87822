'use strict';

var callBound = require('call-bound');

// eslint-disable-next-line no-extra-parens
var $deref = /** @type {<T extends WeakKey>(thisArg: WeakRef<T>) => T | undefined} */ (callBound('WeakRef.prototype.deref', true));

/** @type {import('.')} */
module.exports = typeof WeakRef === 'undefined'
	? function isWeakRef(_value) { // eslint-disable-line no-unused-vars
		return false;
	}
	: function isWeakRef(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}
		try {
			// @ts-expect-error
			$deref(value);
			return true;
		} catch (e) {
			return false;
		}
	};
