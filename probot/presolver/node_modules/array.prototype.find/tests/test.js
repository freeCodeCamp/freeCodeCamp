'use strict';

var expect = require('chai').expect;

var runTests = function (arrayFind) {

	describe('Array', function () {

		var list = [5, 10, 15, 20];

		describe('#find', function () {
			it('should have a length of 1', function () {
				expect(arrayFind.length).to.equal(1);
			});

			it('should find item by predicate', function () {
				var result = arrayFind.call(list, function (item) { return item === 15; });
				expect(result).to.equal(15);
			});

			it('should return undefined when nothing matched', function () {
				var result = arrayFind.call(list, function (item) { return item === 'a'; });
				expect(result).to.equal(undefined);
			});

			it('should throw TypeError when function was not passed', function () {
				expect(function () { list.find(); }).to.throw(TypeError);
			});

			it('should receive all three parameters', function () {
				var foundIndex = arrayFind.call(list, function (value, index, arr) {
					expect(list[index]).to.equal(value);
					expect(list).to.eql(arr);
					return false;
				});
				expect(foundIndex).to.equal(undefined);
			});

			it('should work with the context argument', function () {
				var context = {};
				arrayFind.call([1], function () {
					expect(this).to.equal(context);
				}, context);
			});

			it('should work with an array-like object', function () {
				var obj = { 0: 1, 1: 2, 2: 3, length: 3 };
				var found = arrayFind.call(obj, function (item) {
					return item === 2;
				});
				expect(found).to.equal(2);
			});

			it('should work with an array-like object with negative length', function () {
				var obj = { 0: 1, 1: 2, 2: 3, length: -3 };
				var found = arrayFind.call(obj, function () {
					throw new Error('should not reach here');
				});
				expect(found).to.equal(undefined);
			});

			it('should work with a sparse array', function () {
				var obj = [1, , undefined]; // eslint-disable-line no-sparse-arrays
				expect(1 in obj).to.equal(false);
				var seen = [];
				var found = arrayFind.call(obj, function (item, idx) {
					seen.push([idx, item]);
					return false;
				});
				expect(found).to.equal(undefined);
				expect(seen).to.eql([[0, 1], [1, undefined], [2, undefined]]);
			});

			it('should work with a sparse array-like object', function () {
				var obj = { 0: 1, 2: undefined, length: 3.2 };
				var seen = [];
				var found = arrayFind.call(obj, function (item, idx) {
					seen.push([idx, item]);
					return false;
				});
				expect(found).to.equal(undefined);
				expect(seen).to.eql([[0, 1], [1, undefined], [2, undefined]]);
			});
		});
	});
};

var find = require('../index');

describe('polyfill', function () {
	describe('clean Object.prototype', function () {
		runTests(find.implementation);
	});

	describe('polluted Object.prototype', function () {
		Object.prototype[1] = 42; // eslint-disable-line no-extend-native
		runTests(find.implementation);
		delete Object.prototype[1];
	});
});

describe('shim', function () {
	find.shim();
	var implementation = Array.prototype.find;

	describe('clean Object.prototype', function () {
		runTests(implementation);
	});

	describe('polluted Object.prototype', function () {
		Object.prototype[1] = 42; // eslint-disable-line no-extend-native
		runTests(implementation);
		delete Object.prototype[1];
	});
});

describe('single function', function () {
	var findAsFunction = function (func) { // eslint-disable-line no-unused-vars
		var args = Array.prototype.slice.call(arguments);
		args.unshift(this);
		return find.apply(undefined, args);
	};

	describe('clean Object.prototype', function () {
		runTests(findAsFunction);
	});

	describe('polluted Object.prototype', function () {
		Object.prototype[1] = 42; // eslint-disable-line no-extend-native
		runTests(findAsFunction);
		delete Object.prototype[1];
	});
});
