'use strict';

var test = require('tape');
var forEach = require('for-each');
var v = require('es-value-fixtures');
var inspect = require('object-inspect');

var dataViewByteLength = require('../');

test('dataViewByteLength', function (t) {
	forEach(
		// @ts-expect-error TS sucks at [].concat
		// eslint-disable-next-line no-extra-parens
		/** @type {[...typeof v.primitives, ...typeof v.objects]} */ ([].concat(v.primitives, v.objects)),
		function (nonDV) {
			t['throws'](function () { dataViewByteLength(nonDV); }, TypeError, inspect(nonDV) + ' is not a DataView');
		}
	);

	t.test('DataView', { skip: typeof DataView !== 'function' }, function (st) {
		var ab = new ArrayBuffer(42);
		var dv = new DataView(ab);

		st.equal(dataViewByteLength(dv), 42, inspect(dv) + ' has the same byteLength as the buffer originally passed to the DataView');
		st.equal(dataViewByteLength(dv), dv.buffer.byteLength, inspect(dv) + ' has the same byteLength as the buffer’s byteLength of its own buffer property');

		st.end();
	});

	t.end();
});
