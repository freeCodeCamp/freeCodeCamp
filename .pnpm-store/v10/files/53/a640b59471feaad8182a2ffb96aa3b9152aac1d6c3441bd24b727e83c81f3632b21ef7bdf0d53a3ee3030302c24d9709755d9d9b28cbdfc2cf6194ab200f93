'use strict';

var callBound = require('call-bound');
var $boolToStr = callBound('Boolean.prototype.toString');
var $toString = callBound('Object.prototype.toString');

/** @type {import('.')} */
var tryBooleanObject = function booleanBrandCheck(value) {
	try {
		$boolToStr(value);
		return true;
	} catch (e) {
		return false;
	}
};
var boolClass = '[object Boolean]';
var hasToStringTag = require('has-tostringtag/shams')();

/** @type {import('.')} */
module.exports = function isBoolean(value) {
	if (typeof value === 'boolean') {
		return true;
	}
	if (value === null || typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryBooleanObject(value) : $toString(value) === boolClass;
};
