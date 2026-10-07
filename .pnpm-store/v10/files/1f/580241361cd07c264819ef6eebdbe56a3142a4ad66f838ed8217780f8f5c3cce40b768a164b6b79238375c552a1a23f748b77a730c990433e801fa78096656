'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

var $IteratorPrototype = require('../Iterator.prototype/implementation');

var $Iterator = require('./implementation');

module.exports = function shimIteratorPrototypeCtor() {
	var polyfill = getPolyfill();

	define(
		$IteratorPrototype,
		{ constructor: $Iterator },
		{ constructor: function () { return $Iterator.constructor !== polyfill; } }
	);

	return polyfill;
};
