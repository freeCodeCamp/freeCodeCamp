'use strict';

module.exports = function (getDescriptors, t) {
	var enumDescriptor = {
		configurable: true,
		enumerable: false,
		value: true,
		writable: false
	};
	var writableDescriptor = {
		configurable: true,
		enumerable: true,
		value: 42,
		writable: true
	};

	t.test('works with Object.prototype poisoned setter', { skip: !Object.defineProperty }, function (st) {
		var key = 'foo';

		var obj = {};
		obj[key] = 42;

		var expected = {};
		expected[key] = {
			configurable: true,
			enumerable: true,
			value: 42,
			writable: true
		};

		/* eslint-disable no-extend-native, accessor-pairs */
		Object.defineProperty(Object.prototype, key, { configurable: true, set: function (v) { throw new Error(v); } });
		/* eslint-enable no-extend-native, accessor-pairs */

		var hasOwnNamesBug = false;
		try {
			Object.getOwnPropertyNames(obj);
		} catch (e) {
			// v8 in node 0.6 - 0.12 has a bug :-(
			hasOwnNamesBug = true;
			st.comment('SKIP: this engine has a bug with Object.getOwnPropertyNames: it can not handle a throwing setter on Object.prototype.');
		}

		if (!hasOwnNamesBug) {
			st.doesNotThrow(function () {
				var result = getDescriptors(obj);
				st.deepEqual(result, expected, 'got expected descriptors');
			});
		}

		/* eslint-disable no-extend-native */
		delete Object.prototype[key];
		/* eslint-enable no-extend-native */
		st.end();
	});

	t.test('gets all expected non-Symbol descriptors', function (st) {
		var obj = { normal: Infinity };
		Object.defineProperty(obj, 'enumerable', enumDescriptor);
		Object.defineProperty(obj, 'writable', writableDescriptor);

		var descriptors = getDescriptors(obj);

		st.deepEqual(descriptors, {
			enumerable: enumDescriptor,
			normal: {
				configurable: true,
				enumerable: true,
				value: Infinity,
				writable: true
			},
			writable: writableDescriptor
		});
		st.end();
	});

	var supportsSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
	t.test('gets Symbol descriptors too', { skip: !supportsSymbols }, function (st) {
		var symbol = Symbol();
		var symDescriptor = {
			configurable: false,
			enumerable: true,
			value: [symbol],
			writable: true
		};
		var obj = { normal: Infinity };
		Object.defineProperty(obj, 'enumerable', enumDescriptor);
		Object.defineProperty(obj, 'writable', writableDescriptor);
		Object.defineProperty(obj, 'symbol', symDescriptor);

		var descriptors = getDescriptors(obj);

		st.deepEqual(descriptors, {
			enumerable: enumDescriptor,
			normal: {
				configurable: true,
				enumerable: true,
				value: Infinity,
				writable: true
			},
			symbol: symDescriptor,
			writable: writableDescriptor
		});
		st.end();
	});

	/* global Proxy */
	var supportsProxy = typeof Proxy === 'function';
	t.test('Proxies that return an undefined descriptor', { skip: !supportsProxy }, function (st) {
		var obj = { foo: true };
		var fooDescriptor = Object.getOwnPropertyDescriptor(obj, 'foo');

		var proxy = new Proxy(obj, {
			getOwnPropertyDescriptor: function (target, key) {
				return Object.getOwnPropertyDescriptor(target, key);
			},
			ownKeys: function () {
				return [
					'foo',
					'bar'
				];
			}
		});
		st.deepEqual(getDescriptors(proxy), { foo: fooDescriptor }, 'object has no descriptors');
		st.end();
	});
};
