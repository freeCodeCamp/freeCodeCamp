'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');
var regexTester = require('safe-regex-test');
var every = require('../helpers/every');

var $charAt = callBound('String.prototype.charAt');
var $strSlice = callBound('String.prototype.slice');
var $indexOf = callBound('String.prototype.indexOf');
var $parseInt = parseInt;

var isDigit = regexTester(/^[0-9]$/);

var inspect = require('object-inspect');
var isInteger = require('math-intrinsics/isInteger');

var Get = require('./Get');
var IsArray = require('./IsArray');
var ToObject = require('./ToObject');
var ToString = require('./ToString');

var isStringOrUndefined = require('../helpers/isStringOrUndefined');

// http://262.ecma-international.org/9.0/#sec-getsubstitution

// eslint-disable-next-line max-statements, max-params, max-lines-per-function
module.exports = function GetSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	if (typeof matched !== 'string') {
		throw new $TypeError('Assertion failed: `matched` must be a String');
	}
	var matchLength = matched.length;

	if (typeof str !== 'string') {
		throw new $TypeError('Assertion failed: `str` must be a String');
	}
	var stringLength = str.length;

	if (!isInteger(position) || position < 0 || position > stringLength) {
		throw new $TypeError('Assertion failed: `position` must be a nonnegative integer, and less than or equal to the length of `string`, got ' + inspect(position));
	}

	if (!IsArray(captures) || !every(captures, isStringOrUndefined)) {
		throw new $TypeError('Assertion failed: `captures` must be a List of Strings or `undefined`, got ' + inspect(captures));
	}

	if (typeof replacement !== 'string') {
		throw new $TypeError('Assertion failed: `replacement` must be a String');
	}

	var tailPos = position + matchLength;
	var m = captures.length;
	if (typeof namedCaptures !== 'undefined') {
		namedCaptures = ToObject(namedCaptures); // eslint-disable-line no-param-reassign
	}

	var result = '';
	for (var i = 0; i < replacement.length; i += 1) {
		// if this is a $, and it's not the end of the replacement
		var current = $charAt(replacement, i);
		var isLast = (i + 1) >= replacement.length;
		var nextIsLast = (i + 2) >= replacement.length;
		if (current === '$' && !isLast) {
			var next = $charAt(replacement, i + 1);
			if (next === '$') {
				result += '$';
				i += 1;
			} else if (next === '&') {
				result += matched;
				i += 1;
			} else if (next === '`') {
				result += position === 0 ? '' : $strSlice(str, 0, position - 1);
				i += 1;
			} else if (next === "'") {
				result += tailPos >= stringLength ? '' : $strSlice(str, tailPos);
				i += 1;
			} else {
				var nextNext = nextIsLast ? null : $charAt(replacement, i + 2);
				if (isDigit(next) && next !== '0' && (nextIsLast || !isDigit(nextNext))) {
					// $1 through $9, and not followed by a digit
					var n = $parseInt(next, 10);
					// if (n > m, impl-defined)
					result += n <= m && typeof captures[n - 1] === 'undefined' ? '' : captures[n - 1];
					i += 1;
				} else if (isDigit(next) && (nextIsLast || isDigit(nextNext))) {
					// $00 through $99
					var nn = next + nextNext;
					var nnI = $parseInt(nn, 10) - 1;
					// if nn === '00' or nn > m, impl-defined
					result += nn <= m && typeof captures[nnI] === 'undefined' ? '' : captures[nnI];
					i += 2;
				} else if (next === '<') {
					if (typeof namedCaptures === 'undefined') {
						result += '$<';
						i += 2;
					} else {
						var endIndex = $indexOf(replacement, '>', i);

						if (endIndex > -1) {
							var groupName = $strSlice(replacement, i + '$<'.length, endIndex);
							var capture = Get(namedCaptures, groupName);

							if (typeof capture !== 'undefined') {
								result += ToString(capture);
							}
							i += ('<' + groupName + '>').length;
						}
					}
				} else {
					result += '$';
				}
			}
		} else {
			// the final $, or else not a $
			result += $charAt(replacement, i);
		}
	}
	return result;
};
