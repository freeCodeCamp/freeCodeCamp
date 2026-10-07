var { each, map } = require('../src/util')
var { deepEqual } = require('../tests/util')

module.exports = {
	plugin: require('./operations'),
	setup: setup,
}

function setup(store) {

	test('push', function() {
		_testArrayOp('push', [], [
			[],
			['a'],
			['b','c'],
			[null],
			[[], {}]
		])
	})

	test('unshift', function() {
		_testArrayOp('unshift', undefined, [
			[],
			['a'],
			['b','c'],
			[null],
			[[], {}]
		])
	})

	test('pop', function() {
		var arr = ['a', 'b', 'c', null, [[], {}]]
		// Call pop arr.length + 1 times. No args each time
		var argsList = map(arr, function() { return [] }).concat([])
		_testArrayOp('pop', arr, argsList)
	})

	test('shift', function() {
		var arr = ['a', 'b', 'c', null, [[], {}]]
		// Call shift arr.length + 1 times. No args each time
		var argsList = map(arr, function() { return [] }).concat([])
		_testArrayOp('shift', arr, argsList)
	})

	test('assign', function() {
		store.clearAll()
		var expect = { bar:'cat', mat:{ hat:'bat', arr:[1,2,3] }}
		store.assign('foo', expect)
		assert(deepEqual(store.get('foo'), expect))
		var add = { bar:'cat2', mat:{ hat:'bat2' }, newProp:'newProp'}
		store.assign('foo', add)
		each(add, function(val, key) {
			expect[key] = val
		})
		assert(deepEqual(store.get('foo'), expect))
	})

	function _testArrayOp(fnName, arr, argLists) {
		var key = 'test-'+fnName
		store.set(key, arr)
		arr = (arr || [])
		var arrFn = arr[fnName]
		var storeFn = store[fnName]
		each(argLists, function(args) {
			var expectedFnResult = arrFn.apply(arr, args)
			var actualFnResult = storeFn.apply(store, [key].concat(args))
			assert(deepEqual(expectedFnResult, actualFnResult))
			var actual = store.get(key)
			assert(deepEqual(arr, actual))
		})
	}
}
