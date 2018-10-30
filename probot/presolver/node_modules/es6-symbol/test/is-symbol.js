'use strict';

var SymbolPoly = require('../polyfill');

module.exports = function (t, a) {
	a(t(undefined), false, "Undefined");
	a(t(null), false, "Null");
	a(t(true), false, "Primitive");
	a(t('raz'), false, "String");
	a(t({}), false, "Object");
	a(t([]), false, "Array");
	if (typeof Symbol !== 'undefined') {
		a(t(Symbol()), true, "Native");
	}
	a(t(SymbolPoly()), true, "Polyfill");
};
