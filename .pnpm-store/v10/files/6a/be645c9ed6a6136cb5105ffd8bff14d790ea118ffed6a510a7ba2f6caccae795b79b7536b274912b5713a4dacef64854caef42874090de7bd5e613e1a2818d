'use strict';

var test = require('tape');
var forEach = require('for-each');
var v = require('es-value-fixtures');
var inspect = require('object-inspect');

var dataViewBuffer = require('../');

test('dataViewBuffer', function (t) {
	forEach(
		// @ts-expect-error TS sucks at [].concat
		// eslint-disable-next-line no-extra-parens
		/** @type {[...typeof v.primitives, ...typeof v.objects]} */ ([].concat(v.primitives, v.objects)),
		function (nonDV) {
			t['throws'](function () { dataViewBuffer(nonDV); }, TypeError, inspect(nonDV) + ' is not a DataView');
		}
	);

	t.test('DataView', { skip: typeof DataView !== 'function' }, function (st) {
		var ab = new ArrayBuffer(1);
		var dv = new DataView(ab);

		st.equal(dataViewBuffer(dv), ab, inspect(dv) + ' has the same buffer originally passed to the DataView');
		st.equal(dataViewBuffer(dv), dv.buffer, inspect(dv) + ' has the same buffer as its own buffer property');

		st.end();
	});

	t.end();
});
