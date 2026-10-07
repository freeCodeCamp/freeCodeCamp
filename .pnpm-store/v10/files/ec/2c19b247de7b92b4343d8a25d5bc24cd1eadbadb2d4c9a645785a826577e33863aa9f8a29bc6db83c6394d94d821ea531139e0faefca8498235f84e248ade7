'use strict';

var callBind = require('call-bind');
var forEach = require('for-each');
var gOPD = require('gopd');
var hasProto = require('has-proto')();
var isTypedArray = require('is-typed-array');

var typedArrays = require('available-typed-arrays')();

/** @typedef {import('possible-typed-array-names')[number]} TypedArrayName */
/** @typedef {(value: import('.').TypedArray) => number} Getter */

/** @type {Partial<Record<TypedArrayName, Getter> & { __proto__: null }>} */
var getters = {
	__proto__: null
};

var oDP = Object.defineProperty;
if (gOPD) {
	/** @type {Getter} */
	var getByteLength = function (x) {
		return x.byteLength;
	};
	forEach(typedArrays, function (typedArray) {
		// In Safari 7, Typed Array constructors are typeof object
		if (typeof global[typedArray] === 'function' || typeof global[typedArray] === 'object') {
			var TA = global[typedArray];
			/** @type {import('.').TypedArray} */
			var Proto = TA.prototype;
			// @ts-expect-error TS doesn't narrow properly inside callbacks
			var descriptor = gOPD(Proto, 'byteLength');
			if (!descriptor && hasProto) {
				// @ts-expect-error hush, TS, every object has a dunder proto
				var superProto = Proto.__proto__; // eslint-disable-line no-proto
				// @ts-expect-error TS doesn't narrow properly inside callbacks
				descriptor = gOPD(superProto, 'byteLength');
			}
			// Opera 12.16 has a magic byteLength data property on instances AND on Proto
			if (descriptor && descriptor.get) {
				getters[typedArray] = callBind(descriptor.get);
			} else if (oDP) {
				// this is likely an engine where instances have a magic byteLength data property
				var arr = new global[typedArray](2);
				// @ts-expect-error TS doesn't narrow properly inside callbacks
				descriptor = gOPD(arr, 'byteLength');
				if (descriptor && descriptor.configurable) {
					oDP(arr, 'length', { value: 3 });
				}
				if (arr.length === 2) {
					getters[typedArray] = getByteLength;
				}
			}
		}
	});
}

/** @type {Getter} */
var tryTypedArrays = function tryAllTypedArrays(value) {
	/** @type {number} */ var foundByteLength;
	forEach(
		// eslint-disable-next-line no-extra-parens
		/** @type {Record<TypedArrayName, Getter>} */ (getters),
		/** @type {(getter: Getter) => void} */ function (getter) {
			if (typeof foundByteLength !== 'number') {
				try {
					var byteLength = getter(value);
					if (typeof byteLength === 'number') {
						foundByteLength = byteLength;
					}
				} catch (e) {}
			}
		}
	);
	// @ts-expect-error TS can't guarantee the callback is invoked sync
	return foundByteLength;
};

/** @type {import('.')} */
module.exports = function typedArrayByteLength(value) {
	if (!isTypedArray(value)) {
		return false;
	}
	return tryTypedArrays(value);
};
