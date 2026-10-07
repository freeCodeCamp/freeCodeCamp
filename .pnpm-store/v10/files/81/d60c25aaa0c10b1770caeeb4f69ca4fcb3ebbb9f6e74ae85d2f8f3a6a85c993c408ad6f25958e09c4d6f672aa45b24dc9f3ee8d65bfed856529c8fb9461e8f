'use strict';

var callBound = require('call-bound');

var $PromiseThen = callBound('Promise.prototype.then', true);

var isObject = require('es-object-atoms/isObject');

// https://262.ecma-international.org/6.0/#sec-ispromise

module.exports = function IsPromise(x) {
	if (!isObject(x)) {
		return false;
	}
	if (!$PromiseThen) { // Promises are not supported
		return false;
	}
	try {
		$PromiseThen(x); // throws if not a promise
	} catch (e) {
		return false;
	}
	return true;
};
