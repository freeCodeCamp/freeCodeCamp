'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');

var getIteratorPolyfill = require('../Iterator/polyfill');

module.exports = function shimIteratorZip() {
	var $Iterator = getIteratorPolyfill();
	var polyfill = getPolyfill();
	define(
		$Iterator,
		{ zip: polyfill },
		{ zip: function () { return $Iterator.zip !== polyfill; } }
	);

	return polyfill;
};
