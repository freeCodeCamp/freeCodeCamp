'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');
var regexExec = require('call-bound')('RegExp.prototype.exec');

var Call = require('./Call');
var Get = require('./Get');
var IsCallable = require('./IsCallable');

// https://262.ecma-international.org/6.0/#sec-regexpexec

module.exports = function RegExpExec(R, S) {
	if (!isObject(R)) {
		throw new $TypeError('Assertion failed: `R` must be an Object');
	}
	if (typeof S !== 'string') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	var exec = Get(R, 'exec');
	if (IsCallable(exec)) {
		var result = Call(exec, R, [S]);
		if (result === null || isObject(result)) {
			return result;
		}
		throw new $TypeError('"exec" method must return `null` or an Object');
	}
	return regexExec(R, S);
};
