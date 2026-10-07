'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeSome() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ some: polyfill },
		{ some: function () { return $IteratorPrototype.some !== polyfill; } }
	);

	return polyfill;
};
