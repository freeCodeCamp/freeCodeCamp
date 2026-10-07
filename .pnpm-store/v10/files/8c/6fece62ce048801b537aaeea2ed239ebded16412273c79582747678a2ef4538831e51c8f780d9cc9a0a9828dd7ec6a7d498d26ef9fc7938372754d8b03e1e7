'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');

var $dataViewByteOffset = callBound('DataView.prototype.byteOffset', true);

var isDataView = require('is-data-view');

// node <= 0.10, < 0.11.4 has a nonconfigurable own property instead of a prototype getter
/** @type {import('.')} */
module.exports = $dataViewByteOffset || function byteOffset(x) {
	if (!isDataView(x)) {
		throw new $TypeError('not a DataView');
	}

	return x.byteOffset;
};
