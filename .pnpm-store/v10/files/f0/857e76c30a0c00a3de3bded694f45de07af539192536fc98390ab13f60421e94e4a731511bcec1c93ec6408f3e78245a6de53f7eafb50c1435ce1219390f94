'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeEvery() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ every: polyfill },
		{ every: function () { return $IteratorPrototype.every !== polyfill; } }
	);

	return polyfill;
};
