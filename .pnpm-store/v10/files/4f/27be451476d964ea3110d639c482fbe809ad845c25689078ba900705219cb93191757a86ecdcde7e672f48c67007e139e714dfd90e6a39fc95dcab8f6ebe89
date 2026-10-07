'use strict';

var GetIntrinsic = require('get-intrinsic');

var $ArrayBuffer = GetIntrinsic('%ArrayBuffer%');
var $DataView = GetIntrinsic('%DataView%', true);

var callBound = require('call-bound');

// node <= 0.10, < 0.11.4 has a nonconfigurable own property instead of a prototype getter
var $dataViewBuffer = callBound('DataView.prototype.buffer', true);

var isTypedArray = require('is-typed-array');

/** @type {import('.')} */
module.exports = function isDataView(x) {
	if (!x || typeof x !== 'object' || !$DataView || isTypedArray(x)) {
		return false;
	}

	if ($dataViewBuffer) {
		try {
			$dataViewBuffer(x);
			return true;
		} catch (e) {
			return false;
		}
	}

	if (
		('getInt8' in x)
			&& typeof x.getInt8 === 'function'
			&& x.getInt8 === new $DataView(new $ArrayBuffer(1)).getInt8
	) {
		return true;
	}

	return false;
};
