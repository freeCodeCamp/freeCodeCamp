'use strict';

var global   = require('es5-ext/global')
  , polyfill = require('../polyfill');

module.exports = function (t, a) {
	var cache;
	a(typeof t(), 'boolean');
	cache = global.WeakMap;
	global.WeakMap = polyfill;
	a(t(), true);
	if (cache === undefined) delete global.WeakMap;
	else global.WeakMap = cache;
};
