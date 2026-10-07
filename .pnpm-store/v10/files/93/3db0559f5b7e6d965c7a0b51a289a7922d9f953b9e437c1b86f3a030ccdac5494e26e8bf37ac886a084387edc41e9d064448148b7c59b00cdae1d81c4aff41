'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeTake() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ take: polyfill },
		{ take: function () { return $IteratorPrototype.take !== polyfill; } }
	);

	return polyfill;
};
