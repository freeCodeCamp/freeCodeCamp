'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');

var getIteratorPolyfill = require('../Iterator/polyfill');

module.exports = function shimIteratorConcat() {
	var $Iterator = getIteratorPolyfill();
	var polyfill = getPolyfill();
	define(
		$Iterator,
		{ concat: polyfill },
		{ concat: function () { return $Iterator.concat !== polyfill; } }
	);

	return polyfill;
};
