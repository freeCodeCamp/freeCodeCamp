'use strict';

var GetIntrinsic = require('get-intrinsic');
var $concat = GetIntrinsic('%Array.prototype.concat%');

var callBind = require('call-bind');

var callBound = require('call-bound');
var $slice = callBound('Array.prototype.slice');

var hasSymbols = require('has-symbols/shams')();
var isConcatSpreadable = hasSymbols && Symbol.isConcatSpreadable;

/** @type {never[]} */ var empty = [];
var $concatApply = isConcatSpreadable ? callBind.apply($concat, empty) : null;

// eslint-disable-next-line no-extra-parens
var isArray = isConcatSpreadable ? /** @type {(value: unknown) => value is unknown[]} */ (require('isarray')) : null;

/** @type {import('.')} */
module.exports = isConcatSpreadable
	// eslint-disable-next-line no-unused-vars
	? function safeArrayConcat(item) {
		for (var i = 0; i < arguments.length; i += 1) {
			/** @type {typeof item} */ var arg = arguments[i];
			// @ts-expect-error ts(2538) see https://github.com/microsoft/TypeScript/issues/9998#issuecomment-1890787975; works if `const`
			if (arg && typeof arg === 'object' && typeof arg[isConcatSpreadable] === 'boolean') {
				// @ts-expect-error ts(7015) TS doesn't yet support Symbol indexing
				if (!empty[isConcatSpreadable]) {
					// @ts-expect-error ts(7015) TS doesn't yet support Symbol indexing
					empty[isConcatSpreadable] = true;
				}
				// @ts-expect-error ts(2721) ts(18047) not sure why TS can't figure out this can't be null
				var arr = isArray(arg) ? $slice(arg) : [arg];
				// @ts-expect-error ts(7015) TS can't handle expandos on an array
				arr[isConcatSpreadable] = true; // shadow the property. TODO: use [[Define]]
				arguments[i] = arr;
			}
		}
		// @ts-expect-error ts(2345) https://github.com/microsoft/TypeScript/issues/57164 TS doesn't understand that apply can take an arguments object
		return $concatApply(arguments);
	}
	: callBind($concat, empty);
