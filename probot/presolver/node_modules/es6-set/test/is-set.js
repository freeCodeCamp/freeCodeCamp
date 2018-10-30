'use strict';

var SetPoly = require('../polyfill');

module.exports = function (t, a) {
	a(t(undefined), false, "Undefined");
	a(t(null), false, "Null");
	a(t(true), false, "Primitive");
	a(t('raz'), false, "String");
	a(t({}), false, "Object");
	a(t([]), false, "Array");
	if (typeof Set !== 'undefined') {
		a(t(new Set()), true, "Native");
	}
	a(t(new SetPoly()), true, "Polyfill");
};
