'use strict';

var MapPoly = require('../polyfill');

module.exports = function (t, a) {
	a(t(undefined), false, "Undefined");
	a(t(null), false, "Null");
	a(t(true), false, "Primitive");
	a(t('raz'), false, "String");
	a(t({}), false, "Object");
	a(t([]), false, "Array");
	if (typeof Map !== 'undefined') {
		a(t(new Map()), true, "Native");
	}
	a(t(new MapPoly()), true, "Polyfill");
};
