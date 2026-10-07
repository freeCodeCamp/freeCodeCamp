'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');

var $dataViewByteLength = callBound('DataView.prototype.byteLength', true);

var isDataView = require('is-data-view');

// node <= 0.10, < 0.11.4 has a nonconfigurable own property instead of a prototype getter
/** @type {import('.')} */
module.exports = $dataViewByteLength || function byteLength(x) {
	if (!isDataView(x)) {
		throw new $TypeError('not a DataView');
	}

	return x.byteLength;
};
