'use strict';

var inspect = require('object-inspect');
var IsDetachedBuffer = require('es-abstract/2024/IsDetachedBuffer');

var forEach = require('for-each');
var v = require('es-value-fixtures');

var byteLength = require('array-buffer-byte-length');

module.exports = function runTests(slice, t) {
	forEach(v.primitives.concat(v.objects), function (nonAB) {
		t['throws'](
			function () { slice(nonAB); },
			TypeError,
			inspect(nonAB) + ' is not an ArrayBuffer'
		);
	});

	t.test('ArrayBuffers', { skip: typeof ArrayBuffer === 'undefined' }, function (st) {
		var ab = new ArrayBuffer(0);

		st.equal(IsDetachedBuffer(ab), false, 'ArrayBuffer is not detached');

		try {
			var nb = slice(ab);
		} catch (e) {
			if (e instanceof SyntaxError) {
				st.skip('Detaching ArrayBuffer is not supported');
				return st.end();
			}
			console.log(e.stack);
		}

		st.notEqual(nb, ab, 'new ArrayBuffer is not the same as the original');
		st.equal(IsDetachedBuffer(ab), false, 'old ArrayBuffer is not detached');
		st.equal(IsDetachedBuffer(nb), false, 'new ArrayBuffer is not detached');

		var ab2 = new ArrayBuffer(8);
		st.equal(byteLength(ab2), 8, 'original ArrayBuffer has length 8');
		try {
			var nbLen = slice(ab2, 4);
		} catch (e) {
			if (e instanceof SyntaxError) {
				st.skip('Detaching ArrayBuffer is not supported');
				return st.end();
			}
		}
		st.equal(IsDetachedBuffer(ab2), false, 'old ArrayBuffer is not detached');
		st.equal(IsDetachedBuffer(nbLen), false, 'new ArrayBuffer is not detached');

		st.equal(byteLength(ab2), 8, 'original ArrayBuffer has length 8');
		st.equal(byteLength(nbLen), 4, 'newly sliced ArrayBuffer has length 4');

		var one = new ArrayBuffer(1);
		var arr = new Uint8Array(one);
		arr[0] = 123;

		var two = slice(one);

		var arr2 = new Uint8Array(two);
		arr2[0] = 234;

		st.deepEqual(arr, new Uint8Array([123]), 'original buffer is unchanged');
		st.deepEqual(arr2, new Uint8Array([234]), 'sliced buffer is changed');

		return st.end();
	});

	t.test('SharedArrayBuffers', { skip: typeof SharedArrayBuffer === 'undefined' }, function (st) {
		var sab = new SharedArrayBuffer(0);

		st['throws'](
			function () { slice(sab); },
			TypeError,
			inspect(sab) + ' is not an ArrayBuffer'
		);

		st.end();
	});
};
