'use strict';

var $TypeError = require('es-errors/type');

var GetUTCEpochNanoseconds = require('./GetUTCEpochNanoseconds');

var isInteger = require('math-intrinsics/isInteger');

// https://262.ecma-international.org/14.0/#sec-getnamedtimezoneepochnanoseconds

// eslint-disable-next-line max-params
module.exports = function GetNamedTimeZoneEpochNanoseconds(
	timeZoneIdentifier,
	year,
	month,
	day,
	hour,
	minute,
	second,
	millisecond,
	microsecond,
	nanosecond
) {
	if (typeof timeZoneIdentifier !== 'string') {
		throw new $TypeError('Assertion failed: `timeZoneIdentifier` must be a string');
	}
	if (!isInteger(year)) {
		throw new $TypeError('Assertion failed: `year` must be an integral number');
	}
	if (!isInteger(month) || month < 1 || month > 12) {
		throw new $TypeError('Assertion failed: `month` must be an integral number between 1 and 12, inclusive');
	}
	if (!isInteger(day) || day < 1 || day > 31) {
		throw new $TypeError('Assertion failed: `day` must be an integral number between 1 and 31, inclusive');
	}
	if (!isInteger(hour) || hour < 0 || hour > 23) {
		throw new $TypeError('Assertion failed: `hour` must be an integral number between 0 and 23, inclusive');
	}
	if (!isInteger(minute) || minute < 0 || minute > 59) {
		throw new $TypeError('Assertion failed: `minute` must be an integral number between 0 and 59, inclusive');
	}
	if (!isInteger(second) || second < 0 || second > 999) {
		throw new $TypeError('Assertion failed: `second` must be an integral number between 0 and 999, inclusive');
	}
	if (!isInteger(millisecond) || millisecond < 0 || millisecond > 999) {
		throw new $TypeError('Assertion failed: `millisecond` must be an integral number between 0 and 999, inclusive');
	}
	if (!isInteger(microsecond) || microsecond < 0 || microsecond > 999) {
		throw new $TypeError('Assertion failed: `microsecond` must be an integral number between 0 and 999, inclusive');
	}
	if (!isInteger(nanosecond) || nanosecond < 0 || nanosecond > 999) {
		throw new $TypeError('Assertion failed: `nanosecond` must be an integral number between 0 and 999, inclusive');
	}

	if (timeZoneIdentifier !== 'UTC') {
		throw new $TypeError('Assertion failed: only UTC time zone is supported'); // step 1
	}

	var epochNanoseconds = GetUTCEpochNanoseconds(
		year,
		month,
		day,
		hour,
		minute,
		second,
		millisecond,
		microsecond,
		nanosecond
	); // step 2

	return [epochNanoseconds]; // step 3
};
