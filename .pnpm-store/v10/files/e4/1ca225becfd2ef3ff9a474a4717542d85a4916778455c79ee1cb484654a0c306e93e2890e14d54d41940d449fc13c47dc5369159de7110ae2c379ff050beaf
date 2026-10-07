'use strict';

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');

var isArrayBuffer = require('is-array-buffer');

var IsDetachedBuffer = require('./IsDetachedBuffer');

var MessageChannel;
try {
	// eslint-disable-next-line global-require
	MessageChannel = require('worker_threads').MessageChannel; // node 11.7+
} catch (e) { /**/ }

// https://262.ecma-international.org/6.0/#sec-detacharraybuffer

/* globals postMessage */

module.exports = function DetachArrayBuffer(arrayBuffer) {
	if (!isArrayBuffer(arrayBuffer)) {
		throw new $TypeError('Assertion failed: `arrayBuffer` must be an Object with an [[ArrayBufferData]] internal slot');
	}

	if (!IsDetachedBuffer(arrayBuffer)) { // node v21.0.0+ throws when you structuredClone a detached buffer
		if (typeof structuredClone === 'function') {
			structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
		} else if (typeof postMessage === 'function') {
			postMessage('', '/', [arrayBuffer]); // TODO: see if this might trigger listeners
		} else if (MessageChannel) {
			(new MessageChannel()).port1.postMessage(null, [arrayBuffer]);
		} else {
			throw new $SyntaxError('DetachArrayBuffer is not supported in this environment');
		}
	}

	return null;
};
