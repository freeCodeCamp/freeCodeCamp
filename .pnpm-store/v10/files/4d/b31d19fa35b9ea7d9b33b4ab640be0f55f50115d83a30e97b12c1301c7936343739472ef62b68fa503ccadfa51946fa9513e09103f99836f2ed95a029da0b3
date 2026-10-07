module.exports = {
	plugin: require('./v1-backcompat'),
	setup: setup,
}

function setup(store) {

	test('backwards compatability with v1', function() {
		store.clear()
		
		assert(typeof store.disabled    == 'boolean')
		assert(typeof store.enabled     == 'boolean')
		assert(typeof store.version     == 'string')
		assert(typeof store.set         == 'function')
		assert(typeof store.get         == 'function')
		assert(typeof store.has         == 'function')
		assert(typeof store.remove      == 'function')
		assert(typeof store.clear       == 'function')
		assert(typeof store.transact    == 'function')
		assert(typeof store.getAll      == 'function')
		assert(typeof store.forEach     == 'function')
		assert(typeof store.serialize   == 'function')
		assert(typeof store.deserialize == 'function')
		
		store.transact('foosact', function(val) {
			assert(typeof val == 'object', "new key is not an object at beginning of transaction")
			val.foo = 'foo'
		})
		store.transact('foosact', function(val) {
			assert(val.foo == 'foo', "first transaction did not register")
			val.bar = 'bar'
		})
		assert(store.getAll().foosact.foo == 'foo')
		var wasCalled = false
		store.forEach(function(key, val) {
			wasCalled = true
			assert(key == 'foosact')
			assert(val.foo == 'foo')
		})
		assert(wasCalled)
		assert(store.serialize({}) == '{}')
		assert(store.get('foosact').bar == 'bar', "second transaction did not register")
	})
}
