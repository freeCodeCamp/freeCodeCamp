'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeToArray() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ toArray: polyfill },
		{ toArray: function () { return $IteratorPrototype.toArray !== polyfill; } }
	);

	return polyfill;
};
