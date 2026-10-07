'use strict';

var test = require('tape');
var isArray = require('isarray');
var every = require('array.prototype.every');

var availableTypedArrays = require('../');

test('available typed arrays', function (t) {
	t.equal(typeof availableTypedArrays, 'function', 'is a function');

	var arrays = availableTypedArrays();
	t.equal(isArray(arrays), true, 'returns an array');

	t.equal(every(arrays, function (array) { return typeof array === 'string'; }), true, 'contains only strings');

	t.end();
});
