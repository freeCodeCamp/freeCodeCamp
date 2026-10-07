'use strict';

var hasBigInts = require('has-bigints')();

if (hasBigInts) {
	var bigIntValueOf = BigInt.prototype.valueOf;
	/** @type {(value: object) => value is BigInt} */
	var tryBigInt = function tryBigIntObject(value) {
		try {
			bigIntValueOf.call(value);
			return true;
		} catch (e) {
		}
		return false;
	};

	/** @type {import('.')} */
	module.exports = function isBigInt(value) {
		if (
			value === null
			|| typeof value === 'undefined'
			|| typeof value === 'boolean'
			|| typeof value === 'string'
			|| typeof value === 'number'
			|| typeof value === 'symbol'
			|| typeof value === 'function'
		) {
			return false;
		}
		if (typeof value === 'bigint') {
			return true;
		}

		return tryBigInt(value);
	};
} else {
	/** @type {import('.')} */
	module.exports = function isBigInt(value) {
		return false && value;
	};
}
