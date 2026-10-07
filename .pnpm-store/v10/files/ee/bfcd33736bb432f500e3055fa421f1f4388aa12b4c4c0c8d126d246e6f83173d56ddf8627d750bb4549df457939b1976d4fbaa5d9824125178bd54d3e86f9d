'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');

var getIteratorPolyfill = require('../Iterator/polyfill');

module.exports = function shimIteratorFrom() {
	var $Iterator = getIteratorPolyfill();
	var polyfill = getPolyfill();
	define(
		$Iterator,
		{ prototype: polyfill },
		{ prototype: function () { return $Iterator.prototype !== polyfill; } }
	);

	// TODO: install Symbol.toStringTag if needed, once https://bugs.chromium.org/p/chromium/issues/detail?id=1477372 is fixed?

	return polyfill;
};
