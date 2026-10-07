'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

module.exports = function shimIteratorPrototypeMap() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ map: polyfill },
		{ map: function () { return $IteratorPrototype.map !== polyfill; } }
	);

	return polyfill;
};
