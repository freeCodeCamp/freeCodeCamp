'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');

var getIteratorPolyfill = require('../Iterator/polyfill');

module.exports = function shimIteratorFrom() {
	var $Iterator = getIteratorPolyfill();
	var polyfill = getPolyfill();
	define(
		$Iterator,
		{ from: polyfill },
		{ from: function () { return $Iterator.from !== polyfill; } }
	);

	return polyfill;
};
