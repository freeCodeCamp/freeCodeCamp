'use strict';

var tape = require('tape');
var Buffer = require('safe-buffer').Buffer;

var Hash = require('../hash');

var hex = '0A1B2C3D4E5F6G7H';

function equal(t, a, b) {
	t.equal(a.length, b.length);
	t.equal(a.toString('hex'), b.toString('hex'));
}

var hexBuf = Buffer.from('0A1B2C3D4E5F6G7H', 'utf8');
var count16 = {
	strings: ['0A1B2C3D4E5F6G7H'],
	buffers: [
		hexBuf,
		Buffer.from('80000000000000000000000000000080', 'hex')
	]
};

var empty = {
	strings: [''],
	buffers: [
		Buffer.from('80000000000000000000000000000000', 'hex')
	]
};

var multi = {
	strings: ['abcd', 'efhijk', 'lmnopq'],
	buffers: [
		Buffer.from('abcdefhijklmnopq', 'ascii'),
		Buffer.from('80000000000000000000000000000080', 'hex')
	]
};

var long = {
	strings: [hex + hex],
	buffers: [
		hexBuf,
		hexBuf,
		Buffer.from('80000000000000000000000000000100', 'hex')
	]
};

function makeTest(name, data) {
	tape(name, function (t) {
		var h = new Hash(16, 8);
		var hash = Buffer.alloc(20);
		var n = 2;
		var expected = data.buffers.slice();
		// t.plan(expected.length + 1)

		h._update = function (block) {
			var e = expected.shift();
			equal(t, block, e);

			if (n < 0) {
				throw new Error('expecting only 2 calls to _update');
			}
		};
		h._hash = function () {
			return hash;
		};

		data.strings.forEach(function (string) {
			h.update(string, 'ascii');
		});

		equal(t, h.digest(), hash);
		t.end();
	});
}

makeTest('Hash#update 1 in 1', count16);
makeTest('empty Hash#update', empty);
makeTest('Hash#update 1 in 3', multi);
makeTest('Hash#update 2 in 1', long);
