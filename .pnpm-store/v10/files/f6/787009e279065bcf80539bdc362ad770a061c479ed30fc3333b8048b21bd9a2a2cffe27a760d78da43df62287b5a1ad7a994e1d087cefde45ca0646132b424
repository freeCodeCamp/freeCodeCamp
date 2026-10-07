'use strict';

var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*async(?:\s+function(?:\s+|\()|\s*\()/;
var hasToStringTag = require('has-tostringtag/shams')();
var getProto = Object.getPrototypeOf;
var getAsyncFunc = function () { // eslint-disable-line consistent-return
	if (!hasToStringTag) {
		return false;
	}
	try {
		return Function('return async function () {}')();
	} catch (e) {
	}
};
var AsyncFunction;

module.exports = function isAsyncFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	if (isFnRegex.test(fnToStr.call(fn))) {
		return true;
	}
	if (!hasToStringTag) {
		var str = toStr.call(fn);
		return str === '[object AsyncFunction]';
	}
	if (!getProto) {
		return false;
	}
	if (typeof AsyncFunction === 'undefined') {
		var asyncFunc = getAsyncFunc();
		AsyncFunction = asyncFunc ? getProto(asyncFunc) : false;
	}
	return getProto(fn) === AsyncFunction;
};
