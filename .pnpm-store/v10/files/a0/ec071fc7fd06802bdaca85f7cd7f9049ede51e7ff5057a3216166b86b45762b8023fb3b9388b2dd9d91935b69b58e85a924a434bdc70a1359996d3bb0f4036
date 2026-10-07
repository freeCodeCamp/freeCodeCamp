var { deepEqual } = require('../tests/util')

module.exports = {
	plugin: require('./compression'),
	setup: setup,
}

function setup(store) {
	test('string compression size', function() {
		var str = 'foo'
		var serialized = store._serialize(str)
		store.set('foo', str)
		assert(store.raw.get('foo').length < serialized.length, 'compressed string should be smaller than uncompressed')
		assert(deepEqual(store.get('foo'), str), 'value should be equal')
	})

	test('object compression', function () {
		var obj = { one: { two: 3 }}
		var serialized = store._serialize(obj)
		store.set('foo', obj)
		assert(store.raw.get('foo').length < serialized.length, 'compressed object should be smaller than uncompressed')
		assert(deepEqual(store.get('foo'), obj), 'should deep equal original object')
		store.remove('foo')
	})

	test('decompress uncopmressed data', function () {
		store.raw.set('foo', 'baz')
		assert(store.get('foo') == 'baz', 'value should be baz')
		store.remove('foo')
	})

	test('decompress non-existing data', function () {
		assert(store.get('bar') == undefined, 'value should be undefined')
		store.remove('bar')
	})

}
