'use strict';

var $TypeError = require('es-errors/type');
var inspect = require('object-inspect');
var isInteger = require('math-intrinsics/isInteger');
var isObject = require('es-object-atoms/isObject');
var regexTester = require('safe-regex-test');

var Get = require('./Get');
var IsArray = require('./IsArray');
var min = require('./min');
var StringIndexOf = require('./StringIndexOf');
var StringToNumber = require('./StringToNumber');
var substring = require('./substring');
var ToString = require('./ToString');

var every = require('../helpers/every');
var isPrefixOf = require('../helpers/isPrefixOf');
var isStringOrUndefined = require('../helpers/isStringOrUndefined');

var startsWithDollarDigit = regexTester(/^\$[0-9]/);
var startsWithDollarTwoDigit = regexTester(/^\$[0-9][0-9]/);

// http://www.ecma-international.org/ecma-262/15.0/#sec-getsubstitution

// eslint-disable-next-line max-statements, max-params, max-lines-per-function
module.exports = function GetSubstitution(matched, str, position, captures, namedCaptures, replacementTemplate) {
	if (typeof matched !== 'string') {
		throw new $TypeError('Assertion failed: `matched` must be a String');
	}

	if (typeof str !== 'string') {
		throw new $TypeError('Assertion failed: `str` must be a String');
	}

	if (!isInteger(position) || position < 0) {
		throw new $TypeError('Assertion failed: `position` must be a nonnegative integer, got ' + inspect(position));
	}

	if (!IsArray(captures) || !every(captures, isStringOrUndefined)) {
		throw new $TypeError('Assertion failed: `captures` must be a possibly-empty List of Strings or `undefined`, got ' + inspect(captures));
	}

	if (typeof namedCaptures !== 'undefined' && !isObject(namedCaptures)) {
		throw new $TypeError('Assertion failed: `namedCaptures` must be `undefined` or an Object');
	}

	if (typeof replacementTemplate !== 'string') {
		throw new $TypeError('Assertion failed: `replacementTemplate` must be a String');
	}

	var stringLength = str.length; // step 1

	if (position > stringLength) {
		throw new $TypeError('Assertion failed: position > stringLength, got ' + inspect(position)); // step 2
	}

	var templateRemainder = replacementTemplate; // step 3

	var result = ''; // step 4

	while (templateRemainder !== '') { // step 5
		// 5.a NOTE: The following steps isolate ref (a prefix of templateRemainder), determine refReplacement (its replacement), and then append that replacement to result.

		var ref, refReplacement, capture;
		if (isPrefixOf('$$', templateRemainder)) { // step 5.b
			ref = '$$'; // step 5.b.i
			refReplacement = '$'; // step 5.b.ii
		} else if (isPrefixOf('$`', templateRemainder)) { // step 5.c
			ref = '$`'; // step 5.c.i
			refReplacement = substring(str, 0, position); // step 5.c.ii
		} else if (isPrefixOf('$&', templateRemainder)) { // step 5.d
			ref = '$&'; // step 5.d.i
			refReplacement = matched; // step 5.d.ii
		} else if (isPrefixOf('$\'', templateRemainder)) { // step 5.e
			ref = '$\''; // step 5.e.i
			var matchLength = matched.length; // step 5.e.ii
			var tailPos = position + matchLength; // step 5.e.iii
			refReplacement = substring(str, min(tailPos, stringLength)); // step 5.e.iv
			// 5.e.v NOTE: tailPos can exceed stringLength only if this abstract operation was invoked by a call to the intrinsic @@replace method of %RegExp.prototype% on an object whose "exec" property is not the intrinsic %RegExp.prototype.exec%.
		} else if (startsWithDollarDigit(templateRemainder)) { // step 5.f
			var digitCount = startsWithDollarTwoDigit(templateRemainder) ? 2 : 1; // step 5.f.i

			var digits = substring(templateRemainder, 1, 1 + digitCount); // step 5.f.ii

			var index = StringToNumber(digits); // step 5.f.iii

			if (index < 0 || index > 99) {
				throw new $TypeError('Assertion failed: `index` must be >= 0 and <= 99'); // step 5.f.iv
			}

			var captureLen = captures.length; // step 5.f.v

			if (index > captureLen && digitCount === 2) { // step 5.f.vi
				//  1. NOTE: When a two-digit replacement pattern specifies an index exceeding the count of capturing groups, it is treated as a one-digit replacement pattern followed by a literal digit.

				digitCount = 1; // step 5.f.vi.2

				digits = substring(digits, 0, 1); // step 5.f.vi.3

				index = StringToNumber(digits); // step 5.f.vi.4
			}

			ref = substring(templateRemainder, 0, 1 + digitCount); // step 5.f.vii

			if (1 <= index && index <= captureLen) { // step 5.f.viii
				capture = captures[index - 1]; // step 5.f.viii.1

				if (typeof capture === 'undefined') { // step 5.f.viii.2
					refReplacement = ''; // step 5.f.viii.2.a
				} else { // step 5.f.viii.3
					refReplacement = capture; // step 5.f.viii.3.a
				}
			} else { // step 5.f.ix
				refReplacement = ref; // step 5.f.ix.1
			}
		} else if (isPrefixOf('$<', templateRemainder)) { // step 5.g
			var gtPos = StringIndexOf(templateRemainder, '>', 0); // step 5.g.i
			if (!(gtPos > -1) || typeof namedCaptures === 'undefined') { // step 5.g.ii
				ref = '$<'; // step 5.g.ii.1
				refReplacement = ref; // step 5.g.ii.2
			} else { // step 5.g.iii
				ref = substring(templateRemainder, 0, gtPos + 1); // step 5.g.iii.1
				var groupName = substring(templateRemainder, 2, gtPos); // step 5.g.iii.2
				if (!isObject(namedCaptures)) {
					throw new $TypeError('Assertion failed: Type(namedCaptures) is not Object'); // step 5.g.iii.3
				}
				capture = Get(namedCaptures, groupName); // step 5.g.iii.4
				if (typeof capture === 'undefined') { // step 5.g.iii.5
					refReplacement = ''; // step 5.g.iii.5.a
				} else { // step 5.g.iii.6
					refReplacement = ToString(capture); // step 5.g.iii.6.a
				}
			}
		} else { // step 5.h
			ref = substring(templateRemainder, 0, 1); // step 5.h.i
			refReplacement = ref; // step 5.h.ii
		}

		var refLength = ref.length; // step 5.i

		templateRemainder = substring(templateRemainder, refLength); // step 5.j

		result += refReplacement; // step 5.k
	}

	return result; // step 6
};
