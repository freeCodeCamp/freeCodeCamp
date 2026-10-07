'use strict';

var hasOwn = require('hasown');
var GetIntrinsic = require('get-intrinsic');

var $parseInt = GetIntrinsic('%parseInt%');

// https://262.ecma-international.org/13.0/#sec-match-records

module.exports = function isMatchRecord(record) {
	return (
		!!record
		&& typeof record === 'object'
		&& hasOwn(record, '[[StartIndex]]')
		&& hasOwn(record, '[[EndIndex]]')
		&& record['[[StartIndex]]'] >= 0
		&& record['[[EndIndex]]'] >= record['[[StartIndex]]']
		&& String($parseInt(record['[[StartIndex]]'], 10)) === String(record['[[StartIndex]]'])
		&& String($parseInt(record['[[EndIndex]]'], 10)) === String(record['[[EndIndex]]'])
	);
};
