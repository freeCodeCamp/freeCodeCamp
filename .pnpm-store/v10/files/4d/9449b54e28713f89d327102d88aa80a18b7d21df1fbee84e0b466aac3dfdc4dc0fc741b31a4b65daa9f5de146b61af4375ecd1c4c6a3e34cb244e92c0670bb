'use strict';

var result = require('./')();

var test = {
	__proto__: null,
	foo: {}
};

/** @type {import('./accessor')} */
module.exports = function hasAccessor() {
	/* eslint no-proto: 0 */
	return result
		&& !('toString' in test)
		// eslint-disable-next-line no-extra-parens
		&& /** @type {{ __proto__?: typeof Object.prototype }} */ ({}).__proto__ === Object.prototype
		// eslint-disable-next-line no-extra-parens
		&& /** @type {ReadonlyArray<never> & { __proto__?: typeof Array.prototype }} */ (
			[]).__proto__ === Array.prototype;
};
