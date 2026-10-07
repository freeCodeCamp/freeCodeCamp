module.exports = {
	plugin: require('./events'),
	setup: setup,
}

function setup(store) {
	
	test('events', function() {
		store.set('foo', 'bar')
		
		var expectationNone = _createExpectation('expectNone', undefined)
		store.watch('foo', function(){})
		var expectation1 = _createExpectation('foo', 'bar')
		var expectationOnce = _createExpectation('foo', 'bar', true)
		store.watch('foo', function(){})
		
		expectation1.add('bar2')
		expectationOnce.add('bar2')
		store.set('foo', 'bar2')
		
		expectation1.add(undefined)
		store.remove('foo')
		
		expectation1.add('bar3')
		store.set('foo', 'bar3')
		
		var expectation2 = _createExpectation('foo', 'bar3')
		expectation1.add(undefined)
		expectation2.add(undefined)
		store.clearAll() // Should fire for foo
		store.clearAll() // Should not fire anything
		
		expectation1.unwatch()
		expectation2.add('bar4')
		store.set('foo', 'bar4') // Should only fire for expectation2
		
		expectation1.check()
		expectationOnce.check()
		expectation2.check()
		expectationNone.check()
		expectation2.unwatch()
	})
	
	function _createExpectation(key, firstOldVal, useOnce) {
		var expectation = {
			values: [firstOldVal],
			count: 0,
			add: function(value) {
				this.values.push(value)
			},
			check: function() {
				assert(expectation.count + 1 == expectation.values.length)
			},
			unwatch: function() {
				store.unwatch(watchId)
			}
		}
		
		var watchId = (useOnce
			? store.once(key, callback)
			: store.watch(key, callback)
		)
		function callback(val, oldVal) {
			expectation.count += 1
			assert(expectation.values[expectation.count] == val)
			assert(expectation.values[expectation.count - 1] == oldVal)
		}
		
		return expectation
	}	
}
