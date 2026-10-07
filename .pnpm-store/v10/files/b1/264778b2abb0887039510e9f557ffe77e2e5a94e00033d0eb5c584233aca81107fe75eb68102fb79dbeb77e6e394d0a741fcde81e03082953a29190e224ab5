'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeFlatMap() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ flatMap: polyfill },
		{ flatMap: function () { return $IteratorPrototype.flatMap !== polyfill; } }
	);

	return polyfill;
};
