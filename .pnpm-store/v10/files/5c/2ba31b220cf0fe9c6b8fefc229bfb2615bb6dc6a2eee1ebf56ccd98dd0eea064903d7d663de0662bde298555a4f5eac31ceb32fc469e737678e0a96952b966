'use strict';

var result = require('./')();

var test = {
	__proto__: null,
	foo: {}
};

var setter = require('dunder-proto/set');

/** @type {import('./mutator')} */
module.exports = function hasMutator() {
	if (!result) {
		return false;
	}

	var obj = { __proto__: test };
	// @ts-expect-error: TS errors on an inherited property for some reason
	if (obj.foo !== test.foo) {
		return false;
	}

	if (!setter) {
		return false;
	}

	setter(obj, null);
	if ('foo' in obj || 'toString' in obj) {
		return false;
	}
	return true;
};
