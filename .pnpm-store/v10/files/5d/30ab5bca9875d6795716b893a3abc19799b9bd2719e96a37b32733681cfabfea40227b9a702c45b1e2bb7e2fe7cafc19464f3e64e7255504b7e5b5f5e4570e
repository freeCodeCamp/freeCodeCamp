'use strict';

var test = require('tape');
var forEach = require('for-each');
var v = require('es-value-fixtures');
var inspect = require('object-inspect');

var byteLength = require('../');

test('byteLength', function (t) {
	forEach(v.objects.concat(v.primitives), function (nonAB) {
		t.equal(byteLength(nonAB), NaN, inspect(nonAB) + ' is not an ArrayBuffer, and yields NaN');
	});

	t.test('ArrayBuffers', { skip: typeof ArrayBuffer !== 'function' }, function (st) {
		var ab32 = new ArrayBuffer(32);
		st.equal(byteLength(ab32), 32, 'works on an ArrayBuffer of length 32: ' + inspect(ab32));

		var ab0 = new ArrayBuffer(0);
		st.equal(byteLength(ab0), 0, 'works on an ArrayBuffer of length 0: ' + inspect(ab0));

		var dv = new DataView(ab32);
		st.equal(byteLength(dv), NaN, 'a DataView returns NaN');

		st.end();
	});

	t.end();
});
