'use strict';

var callBound = require('call-bound');

/** @type {undefined | ((thisArg: SharedArrayBuffer) => number)} */
var $byteLength = callBound('SharedArrayBuffer.prototype.byteLength', true);

/** @type {import('.')} */
module.exports = $byteLength
	? function isSharedArrayBuffer(obj) {
		if (!obj || typeof obj !== 'object') {
			return false;
		}
		try {
			// @ts-expect-error TS can't figure out this closed-over variable is non-nullable, and it's fine that `obj` might not be a SAB
			$byteLength(obj);
			return true;
		} catch (e) {
			return false;
		}
	}
	: function isSharedArrayBuffer(_obj) { // eslint-disable-line no-unused-vars
		return false;
	};
