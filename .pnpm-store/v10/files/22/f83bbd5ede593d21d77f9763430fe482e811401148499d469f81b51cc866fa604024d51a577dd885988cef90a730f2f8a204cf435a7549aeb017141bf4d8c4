'use strict';

var Buffer = require('safe-buffer').Buffer;
var isArray = require('isarray');
var typedArrayBuffer = require('typed-array-buffer');

var isView = ArrayBuffer.isView || function isView(obj) {
	try {
		typedArrayBuffer(obj);
		return true;
	} catch (e) {
		return false;
	}
};

var useUint8Array = typeof Uint8Array !== 'undefined';
var useArrayBuffer = typeof ArrayBuffer !== 'undefined'
	&& typeof Uint8Array !== 'undefined';
var useFromArrayBuffer = useArrayBuffer && (Buffer.prototype instanceof Uint8Array || Buffer.TYPED_ARRAY_SUPPORT);

module.exports = function toBuffer(data, encoding) {
	if (Buffer.isBuffer(data)) {
		if (data.constructor && !('isBuffer' in data)) {
			// probably a SlowBuffer
			return Buffer.from(data);
		}
		return data;
	}

	if (typeof data === 'string') {
		return Buffer.from(data, encoding);
	}

	/*
	 * Wrap any TypedArray instances and DataViews
	 * Makes sense only on engines with full TypedArray support -- let Buffer detect that
	 */
	if (useArrayBuffer && isView(data)) {
		// Bug in Node.js <6.3.1, which treats this as out-of-bounds
		if (data.byteLength === 0) {
			return Buffer.alloc(0);
		}

		// When Buffer is based on Uint8Array, we can just construct it from ArrayBuffer
		if (useFromArrayBuffer) {
			var res = Buffer.from(data.buffer, data.byteOffset, data.byteLength);
			/*
			 * Recheck result size, as offset/length doesn't work on Node.js <5.10
			 * We just go to Uint8Array case if this fails
			 */
			if (res.byteLength === data.byteLength) {
				return res;
			}
		}

		// Convert to Uint8Array bytes and then to Buffer
		var uint8 = data instanceof Uint8Array ? data : new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
		var result = Buffer.from(uint8);

		/*
		 * Let's recheck that conversion succeeded
		 * We have .length but not .byteLength when useFromArrayBuffer is false
		 */
		if (result.length === data.byteLength) {
			return result;
		}
	}

	/*
	 * Uint8Array in engines where Buffer.from might not work with ArrayBuffer, just copy over
	 * Doesn't make sense with other TypedArray instances
	 */
	if (useUint8Array && data instanceof Uint8Array) {
		return Buffer.from(data);
	}

	var isArr = isArray(data);
	if (isArr) {
		for (var i = 0; i < data.length; i += 1) {
			var x = data[i];
			if (
				typeof x !== 'number'
				|| x < 0
				|| x > 255
				|| ~~x !== x // NaN and integer check
			) {
				throw new RangeError('Array items must be numbers in the range 0-255.');
			}
		}
	}

	/*
	 * Old Buffer polyfill on an engine that doesn't have TypedArray support
	 * Also, this is from a different Buffer polyfill implementation then we have, as instanceof check failed
	 * Convert to our current Buffer implementation
	 */
	if (
		isArr || (
			Buffer.isBuffer(data)
			&& data.constructor
			&& typeof data.constructor.isBuffer === 'function'
			&& data.constructor.isBuffer(data)
		)
	) {
		return Buffer.from(data);
	}

	throw new TypeError('The "data" argument must be a string, an Array, a Buffer, a Uint8Array, or a DataView.');
};
