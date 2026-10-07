'use strict';

var callBound = require('call-bound');

var $numToStr = callBound('Number.prototype.toString');

/** @type {import('.')} */
var tryNumberObject = function tryNumberObject(value) {
	try {
		$numToStr(value);
		return true;
	} catch (e) {
		return false;
	}
};
var $toString = callBound('Object.prototype.toString');
var numClass = '[object Number]';
var hasToStringTag = require('has-tostringtag/shams')();

/** @type {import('.')} */
module.exports = function isNumberObject(value) {
	if (typeof value === 'number') {
		return true;
	}
	if (!value || typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryNumberObject(value) : $toString(value) === numClass;
};
