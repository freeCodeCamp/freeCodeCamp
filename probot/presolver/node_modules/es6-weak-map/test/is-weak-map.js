'use strict';

var WeakMapPoly = require('../polyfill');

module.exports = function (t, a) {
	a(t(undefined), false, "Undefined");
	a(t(null), false, "Null");
	a(t(true), false, "Primitive");
	a(t('raz'), false, "String");
	a(t({}), false, "Object");
	a(t([]), false, "Array");
	if (typeof WeakMap !== 'undefined') {
		a(t(new WeakMap()), true, "Native");
	}
	a(t(new WeakMapPoly()), true, "Polyfill");
};
