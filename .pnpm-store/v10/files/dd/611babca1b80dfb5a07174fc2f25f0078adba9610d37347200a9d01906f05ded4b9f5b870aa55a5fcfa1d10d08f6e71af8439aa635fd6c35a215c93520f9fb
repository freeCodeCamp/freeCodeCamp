'use strict';

var $TypeError = require('es-errors/type');

var hasOwnProperty = require('./HasOwnProperty');
var ToBigInt64 = require('./ToBigInt64');
var ToBigUint64 = require('./ToBigUint64');
var ToInt16 = require('./ToInt16');
var ToInt32 = require('./ToInt32');
var ToInt8 = require('./ToInt8');
var ToUint16 = require('./ToUint16');
var ToUint32 = require('./ToUint32');
var ToUint8 = require('./ToUint8');
var ToUint8Clamp = require('./ToUint8Clamp');

var valueToFloat16Bytes = require('../helpers/valueToFloat16Bytes');
var valueToFloat32Bytes = require('../helpers/valueToFloat32Bytes');
var valueToFloat64Bytes = require('../helpers/valueToFloat64Bytes');
var integerToNBytes = require('../helpers/integerToNBytes');

var tableTAO = require('./tables/typed-array-objects');

// https://262.ecma-international.org/15.0/#table-the-typedarray-constructors
var TypeToAO = {
	__proto__: null,
	$INT8: ToInt8,
	$UINT8: ToUint8,
	$UINT8C: ToUint8Clamp,
	$INT16: ToInt16,
	$UINT16: ToUint16,
	$INT32: ToInt32,
	$UINT32: ToUint32,
	$BIGINT64: ToBigInt64,
	$BIGUINT64: ToBigUint64
};

// https://262.ecma-international.org/16.0/#sec-numerictorawbytes

module.exports = function NumericToRawBytes(type, value, isLittleEndian) {
	if (typeof type !== 'string' || !hasOwnProperty(tableTAO.size, '$' + type)) {
		throw new $TypeError('Assertion failed: `type` must be a TypedArray element type');
	}
	if (typeof value !== 'number' && typeof value !== 'bigint') {
		throw new $TypeError('Assertion failed: `value` must be a Number or a BigInt');
	}
	if (typeof isLittleEndian !== 'boolean') {
		throw new $TypeError('Assertion failed: `isLittleEndian` must be a Boolean');
	}

	if (type === 'FLOAT16') { // step 1
		return valueToFloat16Bytes(value, isLittleEndian);
	} else if (type === 'FLOAT32') { // step 2
		return valueToFloat32Bytes(value, isLittleEndian);
	} else if (type === 'FLOAT64') { // step 3
		return valueToFloat64Bytes(value, isLittleEndian);
	} // step 4

	var n = tableTAO.size['$' + type]; // step 4.a

	var convOp = TypeToAO['$' + type]; // step 4.b

	var intValue = convOp(value); // step 4.c

	return integerToNBytes(intValue, n, isLittleEndian); // step 4.d, 4.e, 5
};
