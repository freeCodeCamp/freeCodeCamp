'use strict';

var Buffer = require('safe-buffer').Buffer;
var toBuffer = require('to-buffer');

var useUint8Array = typeof Uint8Array !== 'undefined';
var useArrayBuffer = useUint8Array && typeof ArrayBuffer !== 'undefined';
var isView = useArrayBuffer && ArrayBuffer.isView;

module.exports = function (thing, encoding) {
	if (
		typeof thing === 'string'
    || Buffer.isBuffer(thing)
    || (useUint8Array && thing instanceof Uint8Array)
    || (isView && isView(thing))
	) {
		return toBuffer(thing, encoding);
	}
	throw new TypeError('The "data" argument must be a string, a Buffer, a Uint8Array, or a DataView');
};
