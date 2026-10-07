'use strict';

var IsCallable = require('is-callable');
var hasOwn = require('hasown');
var functionsHaveNames = require('functions-have-names')();
var callBound = require('call-bound');
var $functionToString = callBound('Function.prototype.toString');
var $stringMatch = callBound('String.prototype.match');
var toStr = callBound('Object.prototype.toString');

var classRegex = /^class /;

var isClass = function isClassConstructor(fn) {
	if (IsCallable(fn)) {
		return false;
	}
	if (typeof fn !== 'function') {
		return false;
	}
	try {
		var match = $stringMatch($functionToString(fn), classRegex);
		return !!match;
	} catch (e) {}
	return false;
};

var regex = /\s*function\s+([^(\s]*)\s*/;

var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

var objectClass = '[object Object]';
var ddaClass = '[object HTMLAllCollection]';

var functionProto = Function.prototype;

var isDDA = function isDocumentDotAll() {
	return false;
};
if (typeof document === 'object') {
	// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
	var all = document.all;
	if (toStr(all) === toStr(document.all)) {
		isDDA = function isDocumentDotAll(value) {
			/* globals document: false */
			// in IE 6-8, typeof document.all is "object" and it's truthy
			if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
				try {
					var str = toStr(value);
					// IE 6-8 uses `objectClass`
					return (str === ddaClass || str === objectClass) && value('') == null; // eslint-disable-line eqeqeq
				} catch (e) { /**/ }
			}
			return false;
		};
	}
}

module.exports = function getName() {
	if (isDDA(this) || (!isClass(this) && !IsCallable(this))) {
		throw new TypeError('Function.prototype.name sham getter called on non-function');
	}
	if (functionsHaveNames && hasOwn(this, 'name')) {
		return this.name;
	}
	if (this === functionProto) {
		return '';
	}
	var str = $functionToString(this);
	var match = $stringMatch(str, regex);
	var name = match && match[1];
	return name;
};
