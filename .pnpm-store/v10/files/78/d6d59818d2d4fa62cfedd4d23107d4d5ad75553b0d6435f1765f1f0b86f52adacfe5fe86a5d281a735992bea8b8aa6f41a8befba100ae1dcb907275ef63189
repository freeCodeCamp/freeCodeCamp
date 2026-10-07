'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = require('es-errors/type');
var $Uint8Array = GetIntrinsic('%Uint8Array%', true);

var isInteger = require('math-intrinsics/isInteger');
var callBound = require('call-bound');

var $charAt = callBound('String.prototype.charAt');
var $reverse = callBound('Array.prototype.reverse');
var $slice = callBound('Array.prototype.slice');

var bytesAsFloat32 = require('../helpers/bytesAsFloat32');
var bytesAsFloat64 = require('../helpers/bytesAsFloat64');
var bytesAsInteger = require('../helpers/bytesAsInteger');
var defaultEndianness = require('../helpers/defaultEndianness');

var IsDetachedBuffer = require('./IsDetachedBuffer');

var isArrayBuffer = require('is-array-buffer');
var safeConcat = require('safe-array-concat');

var tableTAO = require('./tables/typed-array-objects');

var isUnsignedElementType = function isUnsignedElementType(type) { return $charAt(type, 0) === 'U'; };

// https://262.ecma-international.org/6.0/#sec-getvaluefrombuffer

module.exports = function GetValueFromBuffer(arrayBuffer, byteIndex, type) {
	if (!isArrayBuffer(arrayBuffer)) {
		throw new $TypeError('Assertion failed: `arrayBuffer` must be an ArrayBuffer');
	}

	if (!isInteger(byteIndex)) {
		throw new $TypeError('Assertion failed: `byteIndex` must be an integer');
	}

	if (typeof type !== 'string') {
		throw new $TypeError('Assertion failed: `type` must be a string');
	}

	if (arguments.length > 3 && typeof arguments[3] !== 'boolean') {
		throw new $TypeError('Assertion failed: `isLittleEndian` must be a boolean, if present');
	}

	if (IsDetachedBuffer(arrayBuffer)) {
		throw new $TypeError('Assertion failed: ArrayBuffer is detached'); // step 1
	}

	// 2. Assert: There are sufficient bytes in arrayBuffer starting at byteIndex to represent a value of type.

	if (byteIndex < 0) {
		throw new $TypeError('Assertion failed: `byteIndex` must be non-negative'); // step 3
	}

	// 4. Let block be arrayBuffer’s [[ArrayBufferData]] internal slot.

	var elementSize = tableTAO.size['$' + type]; // step 5
	if (!elementSize) {
		throw new $TypeError('Assertion failed: `type` must be one of ' + tableTAO.choices);
	}

	// 6. Let rawValue be a List of elementSize containing, in order, the elementSize sequence of bytes starting with block[byteIndex].
	var rawValue = $slice(new $Uint8Array(arrayBuffer, byteIndex), 0, elementSize); // step 6

	// 8. If isLittleEndian is not present, set isLittleEndian to either true or false. The choice is implementation dependent and should be the alternative that is most efficient for the implementation. An implementation must use the same value each time this step is executed and the same value must be used for the corresponding step in the SetValueInBuffer abstract operation.
	var isLittleEndian = arguments.length > 3 ? arguments[3] : defaultEndianness === 'little'; // step 7

	if (!isLittleEndian) {
		$reverse(rawValue); // step 8
	}

	var bytes = $slice(safeConcat([0, 0, 0, 0, 0, 0, 0, 0], rawValue), -elementSize);

	if (type === 'Float32') { // step 3
		return bytesAsFloat32(bytes);
	}

	if (type === 'Float64') { // step 4
		return bytesAsFloat64(bytes);
	}

	return bytesAsInteger(bytes, elementSize, isUnsignedElementType(type), false);
};
