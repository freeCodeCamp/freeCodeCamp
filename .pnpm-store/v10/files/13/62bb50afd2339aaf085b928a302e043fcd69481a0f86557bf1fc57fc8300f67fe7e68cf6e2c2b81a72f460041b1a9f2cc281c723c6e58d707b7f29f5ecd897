'use strict';

// / <reference types="node" />

var callBind = require('call-bind');
var forEach = require('for-each');
var gOPD = require('gopd');
var isTypedArray = require('is-typed-array');
var typedArrays = require('possible-typed-array-names');
var gPO = require('reflect.getprototypeof/polyfill')();

/** @typedef {(value: import('.').TypedArray) => number} TypedArrayLengthGetter */
/** @typedef {{ [k in `$${import('.').TypedArrayName}` | '__proto__']: k extends '__proto__' ? null : TypedArrayLengthGetter }} Cache */

/** @type {Cache} */
// @ts-expect-error TS doesn't seem to have a "will eventually satisfy" type
var getters = { __proto__: null };
var oDP = Object.defineProperty;
if (gOPD) {
	var getLength = /** @type {TypedArrayLengthGetter} */ function (x) {
		return x.length;
	};
	forEach(typedArrays, /** @type {(typedArray: import('.').TypedArrayName) => void} */ function (typedArray) {
		var TA = global[typedArray];
		// In Safari 7, Typed Array constructors are typeof object
		if (typeof TA === 'function' || typeof TA === 'object') {
			var Proto = TA.prototype;
			// @ts-expect-error TS doesn't narrow types inside callbacks, which is weird
			var descriptor = gOPD(Proto, 'length');
			if (!descriptor) {
				var superProto = gPO(Proto);
				// @ts-expect-error TS doesn't narrow types inside callbacks, which is weird
				descriptor = gOPD(superProto, 'length');
			}
			// Opera 12.16 has a magic length data property on instances AND on Proto
			if (descriptor && descriptor.get) {
				// eslint-disable-next-line no-extra-parens
				getters[/** @type {`$${import('.').TypedArrayName}`} */ ('$' + typedArray)] = callBind(descriptor.get);
			} else if (oDP) {
				// this is likely an engine where instances have a magic length data property
				var arr = new global[typedArray](2);
				// @ts-expect-error TS doesn't narrow types inside callbacks, which is weird
				descriptor = gOPD(arr, 'length');
				if (descriptor && descriptor.configurable) {
					oDP(arr, 'length', { value: 3 });
				}
				if (arr.length === 2) {
				// eslint-disable-next-line no-extra-parens
					getters[/** @type {`$${import('.').TypedArrayName}`} */ ('$' + typedArray)] = getLength;
				}
			}
		}
	});
}

/** @type {TypedArrayLengthGetter} */
var tryTypedArrays = function tryAllTypedArrays(value) {
	/** @type {number} */ var foundLength;
	// @ts-expect-error not sure why this won't work
	forEach(getters, /** @type {(getter: TypedArrayLengthGetter) => void} */ function (getter) {
		if (typeof foundLength !== 'number') {
			try {
				var length = getter(value);
				if (typeof length === 'number') {
					foundLength = length;
				}
			} catch (e) {}
		}
	});
	// @ts-expect-error TS can't guarantee the above callback is invoked sync
	return foundLength;
};

/** @type {import('.')} */
module.exports = function typedArrayLength(value) {
	if (!isTypedArray(value)) {
		return false;
	}
	return tryTypedArrays(value);
};
