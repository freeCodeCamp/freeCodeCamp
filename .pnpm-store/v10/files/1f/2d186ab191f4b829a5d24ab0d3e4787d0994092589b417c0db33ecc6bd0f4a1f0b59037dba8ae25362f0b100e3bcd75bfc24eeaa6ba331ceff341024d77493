module.exports = {
	plugin: require('./update'),
	setup: setup,
}

function setup(store) {

	test('update', function() {
		store.set('foo', { cat:'mat' })
		assert(store.get('foo').cat == 'mat')
		store.update('foo', function(foo) {
			foo.cat = 'mat2'
		})
		assert(store.get('foo').cat == 'mat2')
	})

	test('update return value', function() {
		store.clearAll()
		store.update('foo', function(foo) {
			assert(foo == undefined)
			return { cat:'mat4' }
		})
		assert(store.get('foo').cat == 'mat4')
	})

	test('update default value', function() {
		store.clearAll()
		store.update('foo2', {}, function(foo2) {
			foo2.bar = 'cat'
		})
		assert(store.get('foo2').bar == 'cat')
	})

	test('update default value + return', function() {
		store.clearAll()
		store.update('foo2', [], function(foor2) {
			return { bar2:'cat2' }
		})
		assert(typeof store.get('foo2') == 'object')
		assert(store.get('foo2').bar == undefined)
		assert(store.get('foo2').bar2 == 'cat2')	
	})
}
