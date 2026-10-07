'use strict';

var test = {
	__proto__: null,
	foo: {}
};

// @ts-expect-error: TS errors on an inherited property for some reason
var result = { __proto__: test }.foo === test.foo
	&& !(test instanceof Object);

/** @type {import('.')} */
module.exports = function hasProto() {
	return result;
};
