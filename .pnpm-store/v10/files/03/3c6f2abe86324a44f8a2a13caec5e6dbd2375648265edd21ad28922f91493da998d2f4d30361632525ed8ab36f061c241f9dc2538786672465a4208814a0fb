'use strict';

var GetIntrinsic = require('get-intrinsic');

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var isInteger = require('math-intrinsics/isInteger');
var $Uint8Array = GetIntrinsic('%Uint8Array%', true);

var callBound = require('call-bound');

var $slice = callBound('Array.prototype.slice');

var IsDetachedBuffer = require('./IsDetachedBuffer');
var RawBytesToNumber = require('./RawBytesToNumber');

var isArrayBuffer = require('is-array-buffer');
var isSharedArrayBuffer = require('is-shared-array-buffer');
var safeConcat = require('safe-array-concat');

var tableTAO = require('./tables/typed-array-objects');

var defaultEndianness = require('../helpers/defaultEndianness');

// https://262.ecma-international.org/8.0/#sec-getvaluefrombuffer

module.exports = function GetValueFromBuffer(arrayBuffer, byteIndex, type, isTypedArray, order) {
	var isSAB = isSharedArrayBuffer(arrayBuffer);
	if (!isArrayBuffer(arrayBuffer) && !isSAB) {
		throw new $TypeError('Assertion failed: `arrayBuffer` must be an ArrayBuffer or a SharedArrayBuffer');
	}

	if (!isInteger(byteIndex)) {
		throw new $TypeError('Assertion failed: `byteIndex` must be an integer');
	}

	if (typeof type !== 'string') {
		throw new $TypeError('Assertion failed: `type` must be a string');
	}

	if (typeof isTypedArray !== 'boolean') {
		throw new $TypeError('Assertion failed: `isTypedArray` must be a boolean');
	}

	if (typeof order !== 'string') {
		throw new $TypeError('Assertion failed: `order` must be a string');
	}

	if (arguments.length > 5 && typeof arguments[5] !== 'boolean') {
		throw new $TypeError('Assertion failed: `isLittleEndian` must be a boolean, if present');
	}

	if (IsDetachedBuffer(arrayBuffer)) {
		throw new $TypeError('Assertion failed: `arrayBuffer` is detached'); // step 1
	}

	// 2. Assert: There are sufficient bytes in arrayBuffer starting at byteIndex to represent a value of type.

	if (byteIndex < 0) {
		throw new $TypeError('Assertion failed: `byteIndex` must be non-negative'); // step 3
	}

	// 4. Let block be arrayBuffer.[[ArrayBufferData]].

	var elementSize = tableTAO.size['$' + type]; // step 5
	if (!elementSize) {
		throw new $TypeError('Assertion failed: `type` must be one of ' + tableTAO.choices);
	}

	var rawValue;
	if (isSAB) { // step 6
		/*
		a. Let execution be the [[CandidateExecution]] field of the surrounding agent's Agent Record.
		b. Let eventList be the [[EventList]] field of the element in execution.[[EventLists]] whose [[AgentSignifier]] is AgentSignifier().
		c. If isTypedArray is true and type is "Int8", "Uint8", "Int16", "Uint16", "Int32", or "Uint32", let noTear be true; otherwise let noTear be false.
		d. Let rawValue be a List of length elementSize of nondeterministically chosen byte values.
		e. NOTE: In implementations, rawValue is the result of a non-atomic or atomic read instruction on the underlying hardware. The nondeterminism is a semantic prescription of the memory model to describe observable behaviour of hardware with weak consistency.
		f. Let readEvent be ReadSharedMemory{ [[Order]]: order, [[NoTear]]: noTear, [[Block]]: block, [[ByteIndex]]: byteIndex, [[ElementSize]]: elementSize }.
		g. Append readEvent to eventList.
		h. Append Chosen Value Record { [[Event]]: readEvent, [[ChosenValue]]: rawValue } to execution.[[ChosenValues]].
		*/
		throw new $SyntaxError('TODO: support SharedArrayBuffers');
	} else {
		// 7. Let rawValue be a List of elementSize containing, in order, the elementSize sequence of bytes starting with block[byteIndex].
		rawValue = $slice(new $Uint8Array(arrayBuffer, byteIndex), 0, elementSize); // step 6
	}

	// 8. If isLittleEndian is not present, set isLittleEndian to either true or false. The choice is implementation dependent and should be the alternative that is most efficient for the implementation. An implementation must use the same value each time this step is executed and the same value must be used for the corresponding step in the SetValueInBuffer abstract operation.
	var isLittleEndian = arguments.length > 5 ? arguments[5] : defaultEndianness === 'little'; // step 8

	var bytes = isLittleEndian
		? $slice(safeConcat([0, 0, 0, 0, 0, 0, 0, 0], rawValue), -elementSize)
		: $slice(safeConcat(rawValue, [0, 0, 0, 0, 0, 0, 0, 0]), 0, elementSize);

	return RawBytesToNumber(type, bytes, isLittleEndian);
};
