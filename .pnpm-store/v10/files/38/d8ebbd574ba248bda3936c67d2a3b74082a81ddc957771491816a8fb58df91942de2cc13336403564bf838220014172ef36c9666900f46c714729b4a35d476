'use strict';

var callBound = require('call-bound');

/** @type {(receiver: ThisParameterType<typeof String.prototype.valueOf>, ...args: Parameters<typeof String.prototype.valueOf>) => ReturnType<typeof String.prototype.valueOf>} */
var $strValueOf = callBound('String.prototype.valueOf');

/** @type {import('.')} */
var tryStringObject = function tryStringObject(value) {
	try {
		$strValueOf(value);
		return true;
	} catch (e) {
		return false;
	}
};
/** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */
var $toString = callBound('Object.prototype.toString');
var strClass = '[object String]';
var hasToStringTag = require('has-tostringtag/shams')();

/** @type {import('.')} */
module.exports = function isString(value) {
	if (typeof value === 'string') {
		return true;
	}
	if (!value || typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryStringObject(value) : $toString(value) === strClass;
};
