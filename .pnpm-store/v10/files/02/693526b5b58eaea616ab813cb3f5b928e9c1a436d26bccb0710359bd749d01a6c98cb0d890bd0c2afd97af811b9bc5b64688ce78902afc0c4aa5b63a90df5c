'use strict';

var test = require('tape');
var hasSymbols = require('has-symbols')();
var getProto = require('get-proto');

var iterProto = require('../');

test('Iterator.prototype', function (t) {
	t.ok(iterProto, 'is truthy');
	t.equal(typeof iterProto, 'object', 'is an object');
	t.notEqual(iterProto, Object.prototype, 'is not Object.prototype');

	t.test('Symbol.iterator', { skip: !hasSymbols }, function (st) {
		var fn = iterProto[Symbol.iterator];

		st.equal(typeof fn, 'function', 'Symbol.iterator is a function');

		var sentinel = {};
		st.equal(
			fn.call(sentinel),
			sentinel,
			'Symbol.iterator returns receiver'
		);

		st.end();
	});

	t.test('Array keys', { skip: typeof [].keys !== 'function' }, function (st) {
		var grandProto = getProto(getProto([].keys()));
		st.equal(
			grandProto,
			iterProto,
			'ArrayIterator [[Prototype]] is Iterator.prototype',
			{ skip: grandProto === Object.prototype && 'this environment lacks Iterator.prototype' }
		);

		st.end();
	});

	t.test('Set keys', { skip: typeof Set !== 'function' || typeof Set.prototype.keys !== 'function' }, function (st) {
		var grandProto = getProto(getProto(new Set().keys()));
		st.equal(
			grandProto,
			iterProto,
			'SetIterator [[Prototype]] is Iterator.prototype',
			{ skip: grandProto === Object.prototype && 'this environment lacks Iterator.prototype' }
		);

		st.end();
	});

	t.end();
});
