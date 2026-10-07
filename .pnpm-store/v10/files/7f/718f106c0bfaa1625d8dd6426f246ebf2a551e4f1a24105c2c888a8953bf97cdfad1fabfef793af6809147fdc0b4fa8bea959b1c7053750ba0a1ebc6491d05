'use strict';

var tape = require('tape');
var vectors = require('hash-test-vectors');
// var from = require('bops/typedarray/from')
var Buffer = require('safe-buffer').Buffer;

var createHash = require('../');

function makeTest(alg, i, verbose) {
	var v = vectors[i];

	tape(alg + ': NIST vector ' + i, function (t) {
		if (verbose) {
			t.comment(v);
			t.comment('VECTOR', i);
			t.comment('INPUT', v.input);
			t.comment(Buffer.from(v.input, 'base64').toString('hex'));
		}

		var buf = Buffer.from(v.input, 'base64');
		t.equal(createHash(alg).update(buf).digest('hex'), v[alg]);

		// eslint-disable-next-line no-param-reassign
		i = ~~(buf.length / 2);
		var buf1 = buf.slice(0, i);
		var buf2 = buf.slice(i, buf.length);

		t.comment(buf1.length + ', ' + buf2.length + ', ' + buf.length);
		t.comment(createHash(alg)._block.length);

		t.equal(
			createHash(alg)
				.update(buf1)
				.update(buf2)
				.digest('hex'),
			v[alg]
		);

		var j, buf3;

		// eslint-disable-next-line no-param-reassign
		i = ~~(buf.length / 3);
		j = ~~(buf.length * 2 / 3);
		buf1 = buf.slice(0, i);
		buf2 = buf.slice(i, j);
		buf3 = buf.slice(j, buf.length);

		t.equal(
			createHash(alg)
				.update(buf1)
				.update(buf2)
				.update(buf3)
				.digest('hex'),
			v[alg]
		);

		setTimeout(function () {
			// avoid "too much recursion" errors in tape in firefox
			t.end();
		});
	});
}

vectors.forEach(function (v, i) {
	makeTest('sha', i);
	makeTest('sha1', i);
	makeTest('sha224', i);
	makeTest('sha256', i);
	makeTest('sha384', i);
	makeTest('sha512', i);
});
