'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');

var getIteratorPolyfill = require('../Iterator/polyfill');

module.exports = function shimIteratorZipKeyed() {
	var $Iterator = getIteratorPolyfill();
	var polyfill = getPolyfill();
	define(
		$Iterator,
		{ zipKeyed: polyfill },
		{ zipKeyed: function () { return $Iterator.zipKeyed !== polyfill; } }
	);

	return polyfill;
};
