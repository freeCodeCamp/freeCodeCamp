'use strict';

var test = require('tape');
var debug = require('object-inspect');
var forEach = require('for-each');
var hasOwn = require('hasown');
var v = require('es-value-fixtures');

var getSymbolDescription = require('../');
var getInferredName = require('../getInferredName');

test('getSymbolDescription', function (t) {
	t.test('no symbols', { skip: v.hasSymbols }, function (st) {
		st['throws'](
			// @ts-expect-error
			getSymbolDescription,
			SyntaxError,
			'requires Symbol support'
		);

		st.end();
	});

	forEach([].concat(
		// @ts-expect-error TS sucks with concat
		v.nonSymbolPrimitives,
		v.objects
	), function (nonSymbol) {
		t['throws'](
			function () { getSymbolDescription(nonSymbol); },
			v.hasSymbols ? TypeError : SyntaxError,
			debug(nonSymbol) + ' is not a Symbol'
		);
	});

	t.test('with symbols', { skip: !v.hasSymbols }, function (st) {
		forEach(
			// eslint-disable-next-line no-extra-parens
			/** @type {[symbol, undefined | string][]} */ ([
				[Symbol(), undefined],
				[Symbol(undefined), undefined],
				// @ts-expect-error
				[Symbol(null), 'null'],
				[Symbol.iterator, 'Symbol.iterator'],
				[Symbol('foo'), 'foo']
			]),
			function (pair) {
				var sym = pair[0];
				var desc = pair[1];
				st.equal(getSymbolDescription(sym), desc, debug(sym) + ' description is ' + debug(desc));
			}
		);

		st.test('only possible when inference or native `Symbol.prototype.description` is supported', {
			skip: !getInferredName && !hasOwn(Symbol.prototype, 'description')
		}, function (s2t) {
			s2t.equal(getSymbolDescription(Symbol('')), '', 'Symbol("") description is ""');

			s2t.end();
		});

		st.test('only possible when global symbols are supported', {
			skip: !hasOwn(Symbol, 'for') || !hasOwn(Symbol, 'keyFor')
		}, function (s2t) {
			// eslint-disable-next-line no-restricted-properties
			s2t.equal(getSymbolDescription(Symbol['for']('')), '', 'Symbol.for("") description is ""');
			s2t.end();
		});

		st.end();
	});

	t.end();
});
