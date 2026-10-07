'use strict';

var hasOwn = require('hasown');

var isInteger = require('../isInteger');

module.exports = function isRegExpRecord(value) {
	return !!value
		&& typeof value === 'object'
		&& hasOwn(value, '[[IgnoreCase]]')
		&& typeof value['[[IgnoreCase]]'] === 'boolean'
		&& hasOwn(value, '[[Multiline]]')
		&& typeof value['[[Multiline]]'] === 'boolean'
		&& hasOwn(value, '[[DotAll]]')
		&& typeof value['[[DotAll]]'] === 'boolean'
		&& hasOwn(value, '[[Unicode]]')
		&& typeof value['[[Unicode]]'] === 'boolean'
		&& hasOwn(value, '[[CapturingGroupsCount]]')
		&& typeof value['[[CapturingGroupsCount]]'] === 'number'
		&& isInteger(value['[[CapturingGroupsCount]]'])
		&& value['[[CapturingGroupsCount]]'] >= 0
		&& (!hasOwn(value, '[[UnicodeSets]]') || typeof value['[[UnicodeSets]]'] === 'boolean'); // optional since it was added later
};
