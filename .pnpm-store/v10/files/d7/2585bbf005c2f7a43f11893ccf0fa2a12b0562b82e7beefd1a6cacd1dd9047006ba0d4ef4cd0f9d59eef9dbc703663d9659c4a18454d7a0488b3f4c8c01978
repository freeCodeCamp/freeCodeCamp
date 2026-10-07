'use strict';

var hasOwn = require('hasown');
var isInteger = require('../isInteger');

module.exports = function isSetRecord(value) {
	return !!value
		&& typeof value === 'object'
		&& hasOwn(value, '[[SetObject]]')
		&& value['[[SetObject]]']
		&& typeof value['[[SetObject]]'] === 'object'
		&& hasOwn(value, '[[Size]]')
		&& (
			value['[[Size]]'] === Infinity
			|| (isInteger(value['[[Size]]']) && value['[[Size]]'] >= 0)
		)
		&& hasOwn(value, '[[Has]]')
		&& typeof value['[[Has]]'] === 'function'
		&& hasOwn(value, '[[Keys]]')
		&& typeof value['[[Keys]]'] === 'function';
};
