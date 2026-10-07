'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeReduce() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ reduce: polyfill },
		{ reduce: function () { return $IteratorPrototype.reduce !== polyfill; } }
	);

	return polyfill;
};
