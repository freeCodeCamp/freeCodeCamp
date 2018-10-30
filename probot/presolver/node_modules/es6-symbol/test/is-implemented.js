'use strict';

var global   = require('es5-ext/global')
  , polyfill = require('../polyfill');

module.exports = function (t, a) {
	var cache;
	a(typeof t(), 'boolean');
	cache = global.Symbol;
	global.Symbol = polyfill;
	a(t(), true);
	if (cache === undefined) delete global.Symbol;
	else global.Symbol = cache;
};
