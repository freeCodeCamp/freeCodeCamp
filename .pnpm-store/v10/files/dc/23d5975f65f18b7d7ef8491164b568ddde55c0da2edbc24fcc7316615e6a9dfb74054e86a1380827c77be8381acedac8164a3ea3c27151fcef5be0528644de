'use strict';

var callBind = require('call-bind');
var callBound = require('call-bound');
var GetIntrinsic = require('get-intrinsic');

var $ArrayBuffer = GetIntrinsic('%ArrayBuffer%', true);
/** @type {undefined | ((receiver: ArrayBuffer) => number) | ((receiver: unknown) => never)} */
var $byteLength = callBound('ArrayBuffer.prototype.byteLength', true);
var $toString = callBound('Object.prototype.toString');

// in node 0.10, ArrayBuffers have no prototype methods, but have an own slot-checking `slice` method
var abSlice = !!$ArrayBuffer && !$byteLength && new $ArrayBuffer(0).slice;
var $abSlice = !!abSlice && callBind(abSlice);

/** @type {import('.')} */
module.exports = $byteLength || $abSlice
	? function isArrayBuffer(obj) {
		if (!obj || typeof obj !== 'object') {
			return false;
		}
		try {
			if ($byteLength) {
				// @ts-expect-error no idea why TS can't handle the overload
				$byteLength(obj);
			} else {
				// @ts-expect-error TS chooses not to type-narrow inside a closure
				$abSlice(obj, 0);
			}
			return true;
		} catch (e) {
			return false;
		}
	}
	: $ArrayBuffer
		// in node 0.8, ArrayBuffers have no prototype or own methods, but also no Symbol.toStringTag
		? function isArrayBuffer(obj) {
			return $toString(obj) === '[object ArrayBuffer]';
		}
		// @ts-expect-error
		: function isArrayBuffer(obj) { // eslint-disable-line no-unused-vars
			return false;
		};
