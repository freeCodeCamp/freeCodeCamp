'use strict';

var callBound = require('call-bound');

var getDay = callBound('Date.prototype.getDay');
/** @type {import('.')} */
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay(value);
		return true;
	} catch (e) {
		return false;
	}
};

/** @type {(value: unknown) => string} */
var toStr = callBound('Object.prototype.toString');
var dateClass = '[object Date]';
var hasToStringTag = require('has-tostringtag/shams')();

/** @type {import('.')} */
module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr(value) === dateClass;
};
