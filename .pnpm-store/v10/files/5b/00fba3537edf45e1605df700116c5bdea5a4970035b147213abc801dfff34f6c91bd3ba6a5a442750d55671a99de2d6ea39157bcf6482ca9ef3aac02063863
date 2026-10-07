'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimArrayBufferSlice() {
	if (typeof ArrayBuffer === 'function') {
		var polyfill = getPolyfill();
		define(
			ArrayBuffer.prototype,
			{ slice: polyfill },
			{ slice: function () { return ArrayBuffer.prototype.slice !== polyfill; } }
		);
	}

	return polyfill;
};
