'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = require('es-errors/type');
var $Uint8Array = GetIntrinsic('%Uint8Array%', true);

var isInteger = require('math-intrinsics/isInteger');

var IsDetachedBuffer = require('./IsDetachedBuffer');
var ToInt16 = require('./ToInt16');
var ToInt32 = require('./ToInt32');
var ToInt8 = require('./ToInt8');
var ToUint16 = require('./ToUint16');
var ToUint32 = require('./ToUint32');
var ToUint8 = require('./ToUint8');
var ToUint8Clamp = require('./ToUint8Clamp');

var isArrayBuffer = require('is-array-buffer');
var hasOwn = require('hasown');

var tableTAO = require('./tables/typed-array-objects');

var TypeToAO = {
	__proto__: null,
	$Int8: ToInt8,
	$Uint8: ToUint8,
	$Uint8C: ToUint8Clamp,
	$Int16: ToInt16,
	$Uint16: ToUint16,
	$Int32: ToInt32,
	$Uint32: ToUint32
};

var defaultEndianness = require('../helpers/defaultEndianness');
var forEach = require('../helpers/forEach');
var integerToNBytes = require('../helpers/integerToNBytes');
var valueToFloat32Bytes = require('../helpers/valueToFloat32Bytes');
var valueToFloat64Bytes = require('../helpers/valueToFloat64Bytes');

// https://262.ecma-international.org/6.0/#sec-setvalueinbuffer

module.exports = function SetValueInBuffer(arrayBuffer, byteIndex, type, value) {
	if (!isArrayBuffer(arrayBuffer)) {
		throw new $TypeError('Assertion failed: `arrayBuffer` must be an ArrayBuffer');
	}

	if (!isInteger(byteIndex)) {
		throw new $TypeError('Assertion failed: `byteIndex` must be an integer');
	}

	if (typeof type !== 'string' || !hasOwn(tableTAO.size, '$' + type)) {
		throw new $TypeError('Assertion failed: `type` must be one of ' + tableTAO.choices);
	}

	if (typeof value !== 'number') {
		throw new $TypeError('Assertion failed: `value` must be a number');
	}

	if (arguments.length > 4 && typeof arguments[4] !== 'boolean') {
		throw new $TypeError('Assertion failed: `isLittleEndian` must be a boolean, if present');
	}

	if (IsDetachedBuffer(arrayBuffer)) {
		throw new $TypeError('Assertion failed: ArrayBuffer is detached'); // step 1
	}

	// 2. Assert: There are sufficient bytes in arrayBuffer starting at byteIndex to represent a value of type.

	if (byteIndex < 0) {
		throw new $TypeError('Assertion failed: `byteIndex` must be non-negative'); // step 3
	}

	// 4. Assert: Type(value) is Number.

	// 5. Let block be arrayBuffer’s [[ArrayBufferData]] internal slot.

	// 6. Assert: block is not undefined.

	var elementSize = tableTAO.size['$' + type]; // step 7
	if (!elementSize) {
		throw new $TypeError('Assertion failed: `type` must be one of ' + tableTAO.choices);
	}

	// 8. If isLittleEndian is not present, set isLittleEndian to either true or false. The choice is implementation dependent and should be the alternative that is most efficient for the implementation. An implementation must use the same value each time this step is executed and the same value must be used for the corresponding step in the GetValueFromBuffer abstract operation.
	var isLittleEndian = arguments.length > 4 ? arguments[4] : defaultEndianness === 'little'; // step 8

	var rawBytes;
	if (type === 'Float32') { // step 1
		rawBytes = valueToFloat32Bytes(value, isLittleEndian);
	} else if (type === 'Float64') { // step 2
		rawBytes = valueToFloat64Bytes(value, isLittleEndian);
	} else {
		var n = elementSize; // step 3.a

		var convOp = TypeToAO['$' + type]; // step 3.b

		var intValue = convOp(value); // step 3.c

		rawBytes = integerToNBytes(intValue, n, isLittleEndian); // step 3.d, 3.e, 4
	}

	// 12. Store the individual bytes of rawBytes into block, in order, starting at block[byteIndex].
	var arr = new $Uint8Array(arrayBuffer, byteIndex, elementSize);
	forEach(rawBytes, function (rawByte, i) {
		arr[i] = rawByte;
	});

	// 13. Return NormalCompletion(undefined).
};
