'use strict';

var test = require('tape');
var forEach = require('for-each');
var v = require('es-value-fixtures');
var inspect = require('object-inspect');

var dataViewByteOffset = require('../');

test('dataViewByteOffset', function (t) {
	forEach(
		// @ts-expect-error TS sucks at [].concat
		// eslint-disable-next-line no-extra-parens
		/** @type {[...typeof v.primitives, ...typeof v.objects]} */ ([].concat(v.primitives, v.objects)),
		function (nonDV) {
			t['throws'](function () { dataViewByteOffset(nonDV); }, TypeError, inspect(nonDV) + ' is not a DataView');
		}
	);

	t.test('DataView', { skip: typeof DataView !== 'function' }, function (st) {
		var ab = new ArrayBuffer(42);
		var dv = new DataView(ab, 2);

		st.equal(dataViewByteOffset(dv), 2, inspect(dv) + ' has the same byteOffset originally passed to the DataView');
		st.equal(dataViewByteOffset(dv), dv.byteOffset, inspect(dv) + ' has the same byteOffset as the buffer’s byteOffset');

		st.end();
	});

	t.end();
});
