'use strict';

var test = require('tape');
var availableTypedArrays = require('available-typed-arrays')();
var forEach = require('for-each');
var v = require('es-value-fixtures');
var inspect = require('object-inspect');

var typedArrayBuffer = require('../');

test('typedArrayBuffer', function (t) {
	// @ts-expect-error TS sucks at concat
	forEach([].concat(v.primitives, v.objects), function (nonTA) {
		t['throws'](function () { typedArrayBuffer(nonTA); }, TypeError, inspect(nonTA) + ' is not a Typed Array');
	});

	forEach(availableTypedArrays, function (TA) {
		var ta = new global[TA](0);
		t.equal(typedArrayBuffer(ta), ta.buffer, inspect(ta) + ' has the same buffer as its own buffer property');
	});

	t.end();
});
