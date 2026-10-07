'use strict';

module.exports = function (numberIsNaN, t) {
	t.test('not NaN', function (st) {
		st.test('primitives', function (sst) {
			sst.notOk(numberIsNaN(), 'undefined is not NaN');
			sst.notOk(numberIsNaN(null), 'null is not NaN');
			sst.notOk(numberIsNaN(false), 'false is not NaN');
			sst.notOk(numberIsNaN(true), 'true is not NaN');
			sst.notOk(numberIsNaN(0), 'positive zero is not NaN');
			sst.notOk(numberIsNaN(Infinity), 'Infinity is not NaN');
			sst.notOk(numberIsNaN(-Infinity), '-Infinity is not NaN');
			sst.notOk(numberIsNaN('foo'), 'string is not NaN');
			sst.notOk(numberIsNaN('NaN'), 'string NaN is not NaN');
			sst.end();
		});

		st.notOk(numberIsNaN([]), 'array is not NaN');
		st.notOk(numberIsNaN({}), 'object is not NaN');
		st.notOk(numberIsNaN(function () {}), 'function is not NaN');

		st.test('valueOf', function (vt) {
			var obj = {
				valueOf: function () {
					return NaN;
				}
			};
			vt.ok(numberIsNaN(Number(obj)), 'object with valueOf of NaN, converted to Number, is NaN');
			vt.notOk(numberIsNaN(obj), 'object with valueOf of NaN is not NaN');
			vt.end();
		});

		st.end();
	});

	t.test('NaN literal', function (st) {
		st.ok(numberIsNaN(NaN), 'NaN is NaN');
		st.end();
	});
};
