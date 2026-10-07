'use strict';

var GetIntrinsic = require('get-intrinsic');

var $match = GetIntrinsic('%Symbol.match%', true);

var hasRegExpMatcher = require('is-regex');
var isObject = require('es-object-atoms/isObject');

var ToBoolean = require('./ToBoolean');

// https://262.ecma-international.org/6.0/#sec-isregexp

module.exports = function IsRegExp(argument) {
	if (!isObject(argument)) {
		return false;
	}
	if ($match) {
		var isRegExp = argument[$match];
		if (typeof isRegExp !== 'undefined') {
			return ToBoolean(isRegExp);
		}
	}
	return hasRegExpMatcher(argument);
};
