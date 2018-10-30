'use strict';

var global   = require('es5-ext/global')
  , polyfill = require('../polyfill');

module.exports = function (t, a) {
	var cache;
	a(typeof t(), 'boolean');
	cache = global.Map;
	global.Map = polyfill;
	a(t(), true);
	if (cache === undefined) delete global.Map;
	else global.Map = cache;
};
