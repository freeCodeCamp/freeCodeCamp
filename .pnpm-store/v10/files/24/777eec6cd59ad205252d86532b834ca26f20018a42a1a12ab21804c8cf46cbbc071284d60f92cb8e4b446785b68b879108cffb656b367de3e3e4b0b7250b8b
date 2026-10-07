'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeForEach() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ forEach: polyfill },
		{ forEach: function () { return $IteratorPrototype.forEach !== polyfill; } }
	);

	return polyfill;
};
