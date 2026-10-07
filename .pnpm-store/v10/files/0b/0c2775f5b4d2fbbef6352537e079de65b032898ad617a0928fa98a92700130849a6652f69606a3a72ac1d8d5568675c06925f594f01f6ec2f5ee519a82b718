'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bound');

var $WeakSet = GetIntrinsic('%WeakSet%', true);

/** @type {undefined | (<V>(thisArg: Set<V>, value: V) => boolean)} */
var $setHas = callBound('WeakSet.prototype.has', true);

if ($setHas) {
	/** @type {undefined | (<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean)} */
	var $mapHas = callBound('WeakMap.prototype.has', true);

	/** @type {import('.')} */
	module.exports = function isWeakSet(x) {
		if (!x || typeof x !== 'object') {
			return false;
		}
		try {
			// @ts-expect-error TS can't figure out that $setHas is always truthy here
			$setHas(x, $setHas);
			if ($mapHas) {
				try {
					// @ts-expect-error this indeed might not be a weak collection
					$mapHas(x, $mapHas);
				} catch (e) {
					return true;
				}
			}
			// @ts-expect-error TS can't figure out that $WeakSet is always truthy here
			return x instanceof $WeakSet; // core-js workaround, pre-v3
		} catch (e) {}
		return false;
	};
} else {
	/** @type {import('.')} */
	// @ts-expect-error
	module.exports = function isWeakSet(x) { // eslint-disable-line no-unused-vars
		// `WeakSet` does not exist, or does not have a `has` method
		return false;
	};
}
