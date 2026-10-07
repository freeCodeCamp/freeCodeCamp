'use strict';

var forEach = require('for-each');
var callBind = require('call-bind');
var gPO = require('reflect.getprototypeof/polyfill')();

var typedArrays = require('available-typed-arrays')();

/** @typedef {(x: import('.').TypedArray) => number} ByteOffsetGetter */

/** @type {Record<import('.').TypedArrayName, ByteOffsetGetter>} */
var getters = {
	// @ts-expect-error TS can't handle __proto__ or `satisfies` in jsdoc
	__proto__: null
};

var gOPD = require('gopd');
var oDP = Object.defineProperty;
if (gOPD) {
	/** @type {ByteOffsetGetter} */
	var getByteOffset = function (x) {
		return x.byteOffset;
	};
	forEach(typedArrays, function (typedArray) {
		// In Safari 7, Typed Array constructors are typeof object
		if (typeof global[typedArray] === 'function' || typeof global[typedArray] === 'object') {
			var Proto = global[typedArray].prototype;
			// @ts-expect-error TS can't guarantee the callback is invoked sync
			var descriptor = gOPD(Proto, 'byteOffset');
			if (!descriptor) {
				var superProto = gPO(Proto);
				// @ts-expect-error TS can't guarantee the callback is invoked sync
				descriptor = gOPD(superProto, 'byteOffset');
			}
			// Opera 12.16 has a magic byteOffset data property on instances AND on Proto
			if (descriptor && descriptor.get) {
				getters[typedArray] = callBind(descriptor.get);
			} else if (oDP) {
				// this is likely an engine where instances have a magic byteOffset data property
				var arr = new global[typedArray](2);
				// @ts-expect-error TS can't guarantee the callback is invoked sync
				descriptor = gOPD(arr, 'byteOffset');
				if (descriptor && descriptor.configurable) {
					oDP(arr, 'length', { value: 3 });
				}
				if (arr.length === 2) {
					getters[typedArray] = getByteOffset;
				}
			}
		}
	});
}

/** @type {ByteOffsetGetter} */
var tryTypedArrays = function tryAllTypedArrays(value) {
	/** @type {number} */ var foundOffset;
	forEach(getters, /** @type {(getter: ByteOffsetGetter) => void} */ function (getter) {
		if (typeof foundOffset !== 'number') {
			try {
				var offset = getter(value);
				if (typeof offset === 'number') {
					foundOffset = offset;
				}
			} catch (e) {}
		}
	});
	// @ts-expect-error TS can't guarantee the callback is invoked sync
	return foundOffset;
};

var isTypedArray = require('is-typed-array');

/** @type {import('.')} */
module.exports = function typedArrayByteOffset(value) {
	if (!isTypedArray(value)) {
		return false;
	}
	return tryTypedArrays(value);
};
