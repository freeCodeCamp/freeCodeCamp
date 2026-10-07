var { each } = require('../src/util')
var { deepEqual } = require('../tests/util')

module.exports = {
	plugin: require('./dump'),
	setup: setup,
}

function setup(store) {
	
	test('dump', function() {
		var allValues = {
			'foo': 'bar',
			'cat': { mat:true },
			'hat': 'bat'
		}
		each(allValues, function(val, key) {
			store.set(key, val)
		})
		
		assert(deepEqual(store.dump(), allValues))
		store.clearAll()
		assert(deepEqual(store.dump(), {}))		
	})
}
