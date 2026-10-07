'use strict';

var toStr = Object.prototype.toString;

var isPrimitive = require('./helpers/isPrimitive');

var isCallable = require('is-callable');

/** @type {{ [k in `[[${string}]]`]: (O: { toString?: unknown, valueOf?: unknown }, actualHint?: StringConstructor | NumberConstructor) => null | undefined | string | symbol | number | boolean | bigint; }} */
// http://ecma-international.org/ecma-262/5.1/#sec-8.12.8
var ES5internalSlots = {
	'[[DefaultValue]]': function (O) {
		var actualHint;
		if (arguments.length > 1) {
			actualHint = arguments[1];
		} else {
			actualHint = toStr.call(O) === '[object Date]' ? String : Number;
		}

		if (actualHint === String || actualHint === Number) {
			/** @type {('toString' | 'valueOf')[]} */
			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
			var value, i;
			for (i = 0; i < methods.length; ++i) {
				var method = methods[i];
				if (isCallable(O[method])) {
					// eslint-disable-next-line no-extra-parens
					value = /** @type {Function} */ (O[method])();
					if (isPrimitive(value)) {
						return value;
					}
				}
			}
			throw new TypeError('No default value');
		}
		throw new TypeError('invalid [[DefaultValue]] hint supplied');
	}
};

/** @type {import('./es5')} */
// http://ecma-international.org/ecma-262/5.1/#sec-9.1
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	if (arguments.length > 1) {
		// eslint-disable-next-line no-extra-parens
		return ES5internalSlots['[[DefaultValue]]'](/** @type {object} */ (input), arguments[1]);
	}
	// eslint-disable-next-line no-extra-parens
	return ES5internalSlots['[[DefaultValue]]'](/** @type {object} */ (input));
};
