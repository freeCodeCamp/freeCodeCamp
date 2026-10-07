'use strict';

var hasOwn = require('hasown');
var isTypedArray = require('is-typed-array');

var isInteger = require('../isInteger');

module.exports = function isTypedArrayWithBufferWitnessRecord(value) {
	return !!value
		&& typeof value === 'object'
		&& hasOwn(value, '[[Object]]')
		&& hasOwn(value, '[[CachedBufferByteLength]]')
		&& (
			(isInteger(value['[[CachedBufferByteLength]]']) && value['[[CachedBufferByteLength]]'] >= 0)
			|| value['[[CachedBufferByteLength]]'] === 'DETACHED'
		)
		&& isTypedArray(value['[[Object]]']);
};
