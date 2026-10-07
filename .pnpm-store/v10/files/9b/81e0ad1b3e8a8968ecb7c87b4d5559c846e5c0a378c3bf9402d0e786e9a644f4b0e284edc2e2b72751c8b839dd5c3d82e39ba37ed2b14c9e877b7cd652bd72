'use strict';

var callBind = require('call-bind');

var implementation = require('./implementation');

var ownSlice = typeof ArrayBuffer === 'function' && new ArrayBuffer(0).slice;
var ownSliceBound = ownSlice && callBind(ownSlice);
var ownSliceWrapper = ownSliceBound && function slice(start, end) {
	/* eslint no-invalid-this: 0 */
	if (arguments.length < 2) {
		return ownSliceBound(this, arguments.length > 0 ? start : 0);
	}
	return ownSliceBound(this, start, end);
};

module.exports = function getPolyfill() {
	return (typeof ArrayBuffer === 'function' && ArrayBuffer.prototype.slice)
		|| ownSliceWrapper
		|| implementation;
};
