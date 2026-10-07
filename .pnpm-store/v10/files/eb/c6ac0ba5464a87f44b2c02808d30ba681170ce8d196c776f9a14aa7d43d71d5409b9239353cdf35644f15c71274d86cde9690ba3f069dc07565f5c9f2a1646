'use strict';

var $TypeError = require('es-errors/type');

var ArrayBufferByteLength = require('./ArrayBufferByteLength');
var IsDetachedBuffer = require('./IsDetachedBuffer');

var dataViewBuffer = require('data-view-buffer');
var isDataView = require('is-data-view');

// https://262.ecma-international.org/15.0/#sec-makedataviewwithbufferwitnessrecord

module.exports = function MakeDataViewWithBufferWitnessRecord(obj, order) {
	if (!isDataView(obj)) {
		throw new $TypeError('MakeDataViewWithBufferWitnessRecord called with non-DataView');
	}
	if (order !== 'SEQ-CST' && order !== 'UNORDERED') {
		throw new $TypeError('Assertion failed: `order` must be ~SEQ-CST~ or ~UNORDERED~');
	}

	var buffer = dataViewBuffer(obj); // step 1

	var byteLength = IsDetachedBuffer(buffer) ? 'DETACHED' : ArrayBufferByteLength(buffer, order); // steps 2 - 3

	return { '[[Object]]': obj, '[[CachedBufferByteLength]]': byteLength }; // step 4
};
