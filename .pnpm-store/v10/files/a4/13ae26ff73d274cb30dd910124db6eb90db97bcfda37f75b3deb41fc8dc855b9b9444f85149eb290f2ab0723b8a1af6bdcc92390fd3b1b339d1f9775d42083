module.exports = {
	plugin: require('./observe'),
	setup: setup,
}

function setup(store) {
	
	test('observe', function() {
		store.clearAll()
		var count = -1
		var expect = [undefined]
		var obsId = store.observe('foo', function(val, oldVal) {
			count += 1
			assert(expect[count] == val)
			assert(expect[count - 1] == oldVal)
		}) // count == 1
		store.unobserve(obsId)

		expect.push('bar')
		store.set('foo', 'bar')
		store.observe('foo', function(val, oldVal) {
			count += 1
			assert(expect[count] == val)
			assert(expect[count - 1] == oldVal)
		}) // count == 2

		expect.push('bar2')
		store.set('foo', 'bar2') // count == 3
		assert(count + 1 == expect.length)
	})
}
