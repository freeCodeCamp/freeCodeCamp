'use strict';

var test = require('tape');
var v = require('es-value-fixtures');
var forEach = require('for-each');
var inspect = require('object-inspect');
var hasOwn = require('hasown');
var hasPropertyDescriptors = require('has-property-descriptors')();
var getOwnPropertyDescriptors = require('object.getownpropertydescriptors');
var ownKeys = require('reflect.ownkeys');

var defineDataProperty = require('../');

test('defineDataProperty', function (t) {
	t.test('argument validation', function (st) {
		forEach(v.primitives, function (nonObject) {
			st['throws'](
				// @ts-expect-error
				function () { defineDataProperty(nonObject, 'key', 'value'); },
				TypeError,
				'throws on non-object input: ' + inspect(nonObject)
			);
		});

		forEach(v.nonPropertyKeys, function (nonPropertyKey) {
			st['throws'](
				// @ts-expect-error
				function () { defineDataProperty({}, nonPropertyKey, 'value'); },
				TypeError,
				'throws on non-PropertyKey input: ' + inspect(nonPropertyKey)
			);
		});

		forEach(v.nonBooleans, function (nonBoolean) {
			if (nonBoolean !== null) {
				st['throws'](
					// @ts-expect-error
					function () { defineDataProperty({}, 'key', 'value', nonBoolean); },
					TypeError,
					'throws on non-boolean nonEnumerable: ' + inspect(nonBoolean)
				);

				st['throws'](
					// @ts-expect-error
					function () { defineDataProperty({}, 'key', 'value', false, nonBoolean); },
					TypeError,
					'throws on non-boolean nonWritable: ' + inspect(nonBoolean)
				);

				st['throws'](
					// @ts-expect-error
					function () { defineDataProperty({}, 'key', 'value', false, false, nonBoolean); },
					TypeError,
					'throws on non-boolean nonConfigurable: ' + inspect(nonBoolean)
				);
			}
		});

		st.end();
	});

	t.test('normal data property', function (st) {
		/** @type {Record<PropertyKey, string>} */
		var obj = { existing: 'existing property' };
		st.ok(hasOwn(obj, 'existing'), 'has initial own property');
		st.equal(obj.existing, 'existing property', 'has expected initial value');

		var res = defineDataProperty(obj, 'added', 'added property');
		st.equal(res, void undefined, 'returns `undefined`');
		st.ok(hasOwn(obj, 'added'), 'has expected own property');
		st.equal(obj.added, 'added property', 'has expected value');

		defineDataProperty(obj, 'existing', 'new value');
		st.ok(hasOwn(obj, 'existing'), 'still has expected own property');
		st.equal(obj.existing, 'new value', 'has new expected value');

		defineDataProperty(obj, 'explicit1', 'new value', false);
		st.ok(hasOwn(obj, 'explicit1'), 'has expected own property (explicit enumerable)');
		st.equal(obj.explicit1, 'new value', 'has new expected value (explicit enumerable)');

		defineDataProperty(obj, 'explicit2', 'new value', false, false);
		st.ok(hasOwn(obj, 'explicit2'), 'has expected own property (explicit writable)');
		st.equal(obj.explicit2, 'new value', 'has new expected value (explicit writable)');

		defineDataProperty(obj, 'explicit3', 'new value', false, false, false);
		st.ok(hasOwn(obj, 'explicit3'), 'has expected own property (explicit configurable)');
		st.equal(obj.explicit3, 'new value', 'has new expected value (explicit configurable)');

		st.end();
	});

	t.test('loose mode', { skip: !hasPropertyDescriptors }, function (st) {
		var obj = { existing: 'existing property' };

		defineDataProperty(obj, 'added', 'added value 1', true, null, null, true);
		st.deepEqual(
			getOwnPropertyDescriptors(obj),
			{
				existing: {
					configurable: true,
					enumerable: true,
					value: 'existing property',
					writable: true
				},
				added: {
					configurable: true,
					enumerable: !hasPropertyDescriptors,
					value: 'added value 1',
					writable: true
				}
			},
			'in loose mode, obj still adds property 1'
		);

		defineDataProperty(obj, 'added', 'added value 2', false, true, null, true);
		st.deepEqual(
			getOwnPropertyDescriptors(obj),
			{
				existing: {
					configurable: true,
					enumerable: true,
					value: 'existing property',
					writable: true
				},
				added: {
					configurable: true,
					enumerable: true,
					value: 'added value 2',
					writable: !hasPropertyDescriptors
				}
			},
			'in loose mode, obj still adds property 2'
		);

		defineDataProperty(obj, 'added', 'added value 3', false, false, true, true);
		st.deepEqual(
			getOwnPropertyDescriptors(obj),
			{
				existing: {
					configurable: true,
					enumerable: true,
					value: 'existing property',
					writable: true
				},
				added: {
					configurable: !hasPropertyDescriptors,
					enumerable: true,
					value: 'added value 3',
					writable: true
				}
			},
			'in loose mode, obj still adds property 3'
		);

		st.end();
	});

	t.test('non-normal data property, ES3', { skip: hasPropertyDescriptors }, function (st) {
		/** @type {Record<PropertyKey, string>} */
		var obj = { existing: 'existing property' };

		st['throws'](
			function () { defineDataProperty(obj, 'added', 'added value', true); },
			SyntaxError,
			'nonEnumerable throws a Syntax Error'
		);

		st['throws'](
			function () { defineDataProperty(obj, 'added', 'added value', false, true); },
			SyntaxError,
			'nonWritable throws a Syntax Error'
		);

		st['throws'](
			function () { defineDataProperty(obj, 'added', 'added value', false, false, true); },
			SyntaxError,
			'nonWritable throws a Syntax Error'
		);

		st.deepEqual(
			ownKeys(obj),
			['existing'],
			'obj still has expected keys'
		);
		st.equal(obj.existing, 'existing property', 'obj still has expected values');

		st.end();
	});

	t.test('new non-normal data property, ES5+', { skip: !hasPropertyDescriptors }, function (st) {
		/** @type {Record<PropertyKey, string>} */
		var obj = { existing: 'existing property' };

		defineDataProperty(obj, 'nonEnum', null, true);
		defineDataProperty(obj, 'nonWrit', null, false, true);
		defineDataProperty(obj, 'nonConf', null, false, false, true);

		st.deepEqual(
			getOwnPropertyDescriptors(obj),
			{
				existing: {
					configurable: true,
					enumerable: true,
					value: 'existing property',
					writable: true
				},
				nonEnum: {
					configurable: true,
					enumerable: false,
					value: null,
					writable: true
				},
				nonWrit: {
					configurable: true,
					enumerable: true,
					value: null,
					writable: false
				},
				nonConf: {
					configurable: false,
					enumerable: true,
					value: null,
					writable: true
				}
			},
			'obj has expected property descriptors'
		);

		st.end();
	});

	t.test('existing non-normal data property, ES5+', { skip: !hasPropertyDescriptors }, function (st) {
		// test case changing an existing non-normal property

		/** @type {Record<string, null | string>} */
		var obj = {};
		Object.defineProperty(obj, 'nonEnum', { configurable: true, enumerable: false, value: null, writable: true });
		Object.defineProperty(obj, 'nonWrit', { configurable: true, enumerable: true, value: null, writable: false });
		Object.defineProperty(obj, 'nonConf', { configurable: false, enumerable: true, value: null, writable: true });

		st.deepEqual(
			getOwnPropertyDescriptors(obj),
			{
				nonEnum: {
					configurable: true,
					enumerable: false,
					value: null,
					writable: true
				},
				nonWrit: {
					configurable: true,
					enumerable: true,
					value: null,
					writable: false
				},
				nonConf: {
					configurable: false,
					enumerable: true,
					value: null,
					writable: true
				}
			},
			'obj initially has expected property descriptors'
		);

		defineDataProperty(obj, 'nonEnum', 'new value', false);
		defineDataProperty(obj, 'nonWrit', 'new value', false, false);
		st['throws'](
			function () { defineDataProperty(obj, 'nonConf', 'new value', false, false, false); },
			TypeError,
			'can not alter a nonconfigurable property'
		);

		st.deepEqual(
			getOwnPropertyDescriptors(obj),
			{
				nonEnum: {
					configurable: true,
					enumerable: true,
					value: 'new value',
					writable: true
				},
				nonWrit: {
					configurable: true,
					enumerable: true,
					value: 'new value',
					writable: true
				},
				nonConf: {
					configurable: false,
					enumerable: true,
					value: null,
					writable: true
				}
			},
			'obj ends up with expected property descriptors'
		);

		st.end();
	});

	t.test('frozen object, ES5+', { skip: !hasPropertyDescriptors }, function (st) {
		var frozen = Object.freeze({ existing: true });

		st['throws'](
			function () { defineDataProperty(frozen, 'existing', 'new value'); },
			TypeError,
			'frozen object can not modify an existing property'
		);

		st['throws'](
			function () { defineDataProperty(frozen, 'new', 'new property'); },
			TypeError,
			'frozen object can not add a new property'
		);

		st.end();
	});

	t.test('sealed object, ES5+', { skip: !hasPropertyDescriptors }, function (st) {
		var sealed = Object.seal({ existing: true });
		st.deepEqual(
			Object.getOwnPropertyDescriptor(sealed, 'existing'),
			{
				configurable: false,
				enumerable: true,
				value: true,
				writable: true
			},
			'existing value on sealed object has expected descriptor'
		);

		defineDataProperty(sealed, 'existing', 'new value');

		st.deepEqual(
			Object.getOwnPropertyDescriptor(sealed, 'existing'),
			{
				configurable: false,
				enumerable: true,
				value: 'new value',
				writable: true
			},
			'existing value on sealed object has changed descriptor'
		);

		st['throws'](
			function () { defineDataProperty(sealed, 'new', 'new property'); },
			TypeError,
			'sealed object can not add a new property'
		);

		st.end();
	});

	t.test('nonextensible object, ES5+', { skip: !hasPropertyDescriptors }, function (st) {
		var nonExt = Object.preventExtensions({ existing: true });

		st.deepEqual(
			Object.getOwnPropertyDescriptor(nonExt, 'existing'),
			{
				configurable: true,
				enumerable: true,
				value: true,
				writable: true
			},
			'existing value on non-extensible object has expected descriptor'
		);

		defineDataProperty(nonExt, 'existing', 'new value', true);

		st.deepEqual(
			Object.getOwnPropertyDescriptor(nonExt, 'existing'),
			{
				configurable: true,
				enumerable: false,
				value: 'new value',
				writable: true
			},
			'existing value on non-extensible object has changed descriptor'
		);

		st['throws'](
			function () { defineDataProperty(nonExt, 'new', 'new property'); },
			TypeError,
			'non-extensible object can not add a new property'
		);

		st.end();
	});

	t.end();
});
