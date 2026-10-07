'use strict';

var $TypeError = require('es-errors/type');

var IsDetachedBuffer = require('./IsDetachedBuffer');
var IsFixedLengthArrayBuffer = require('./IsFixedLengthArrayBuffer');

var isDataViewWithBufferWitnessRecord = require('../helpers/records/data-view-with-buffer-witness-record');

var dataViewBuffer = require('data-view-buffer');
var dataViewByteLength = require('data-view-byte-length');
var dataViewByteOffset = require('data-view-byte-offset');

// https://262.ecma-international.org/15.0/#sec-isviewoutofbounds

module.exports = function IsViewOutOfBounds(viewRecord) {
	if (!isDataViewWithBufferWitnessRecord(viewRecord)) {
		throw new $TypeError('Assertion failed: `viewRecord` must be a DataView With Buffer Witness Record');
	}

	var view = viewRecord['[[Object]]']; // step 1

	var bufferByteLength = viewRecord['[[CachedBufferByteLength]]']; // step 2

	if (IsDetachedBuffer(dataViewBuffer(view)) !== (bufferByteLength === 'DETACHED')) {
		// step 3
		throw new $TypeError('Assertion failed: `IsDetachedBuffer(dataViewBuffer(view))` must be true if and only if `bufferByteLength === ~DETACHED~');
	}

	if (bufferByteLength === 'DETACHED') {
		return true; // step 4
	}

	var byteOffsetStart = dataViewByteOffset(view); // step 5

	var isFixed = IsFixedLengthArrayBuffer(dataViewBuffer(view));

	var viewByteLength = isFixed ? dataViewByteLength(view) : 'AUTO'; // view.[[ByteLength]]
	var byteOffsetEnd = viewByteLength === 'AUTO' ? bufferByteLength : byteOffsetStart + viewByteLength; // steps 6 - 7

	if (byteOffsetStart > bufferByteLength || byteOffsetEnd > bufferByteLength) {
		return true; // step 8
	}

	// 9. NOTE: 0-length DataViews are not considered out-of-bounds.

	return false; // step 10
};
