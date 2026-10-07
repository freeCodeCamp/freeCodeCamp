'use strict';

var GetIntrinsic = require('get-intrinsic');

var $ArrayBuffer = GetIntrinsic('%ArrayBuffer%', true);
var $Uint8Array = GetIntrinsic('%Uint8Array%', true);

var IsDetachedBuffer = require('es-abstract/2024/IsDetachedBuffer');
var IsSharedArrayBuffer = require('es-abstract/2024/IsSharedArrayBuffer');
var max = require('es-abstract/2024/max');
var min = require('es-abstract/2024/min');
var SpeciesConstructor = require('es-abstract/2024/SpeciesConstructor');
var ToIntegerOrInfinity = require('es-abstract/2024/ToIntegerOrInfinity');

var arrayBufferByteLength = require('array-buffer-byte-length');
var isArrayBuffer = require('is-array-buffer');
var $TypeError = require('es-errors/type');

module.exports = function slice(start, end) {
	var O = this; // step 1

	if (!isArrayBuffer(O) || IsSharedArrayBuffer(O) || IsDetachedBuffer(O)) {
		throw new $TypeError('receiver must be a non-detached, non-shared ArrayBuffer'); // steps 2-4
	}

	var len = arrayBufferByteLength(O); // step 5

	var relativeStart = ToIntegerOrInfinity(start); // step 6

	var first;
	if (relativeStart === -Infinity) {
		first = 0; // step 7
	} else if (relativeStart < 0) {
		first = max(len + relativeStart, 0); // step 8
	} else {
		first = min(relativeStart, len); // step 9
	}

	var relativeEnd = typeof end === 'undefined' ? len : ToIntegerOrInfinity(end); // step 10

	var final;
	if (relativeEnd === -Infinity) {
		final = 0; // step 11
	} else if (relativeEnd < 0) {
		final = max(len + relativeEnd, 0); // step 12
	} else {
		final = min(relativeEnd, len); // step 13
	}

	var newLen = max(final - first, 0); // step 14

	var Ctor = SpeciesConstructor(O, $ArrayBuffer); // step 15

	var new$ = new Ctor(newLen); // step 16

	if (!isArrayBuffer(new$) || IsSharedArrayBuffer(new$) || IsDetachedBuffer(new$)) {
		throw new $TypeError('Species constructor must produce a non-detached, non-shared Array Buffer'); // steps 17-19
	}

	if (new$ === O) {
		throw new $TypeError('new ArrayBuffer should not have been the same as the receiver'); // step 20
	}

	if (arrayBufferByteLength(new$) < newLen) {
		throw new $TypeError('new ArrayBuffer\'s byteLength must be at least the requested length'); // step 21
	}

	if (IsDetachedBuffer(O)) {
		throw new $TypeError('receiver became an detached ArrayBuffer'); // step 23
	}

	/*
	24. Let fromBuf be O.[[ArrayBufferData]].
	25. Let toBuf be new.[[ArrayBufferData]].
	26. Perform CopyDataBlockBytes(toBuf, 0, fromBuf, first, newLen).
	*/
	var sourceArr = new $Uint8Array(O);
	var destArr = new $Uint8Array(new$);
	for (var i = start, ii = 0; i < end; i++, ii++) {
		destArr[ii] = sourceArr[i];
	}

	return new$; // step 27
};
