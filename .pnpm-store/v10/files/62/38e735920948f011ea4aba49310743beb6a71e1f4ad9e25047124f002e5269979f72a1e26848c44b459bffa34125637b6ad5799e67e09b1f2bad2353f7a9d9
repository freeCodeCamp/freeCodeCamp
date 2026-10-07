module.exports = {
	plugin: require('./expire'),
	setup: setup,
}

function setup(store) {

	test('expire', function(done) {
		// Ive observed multiple times when legacy browsers in various
		// environments (saucelabs, VMs, etc) have executed a scheduled
		// timeout function too soon. The solution is to run a longer,
		// timeout, but this substantially slows down the test suite.
		// Instead, we allow multiple attempts with increasing durations.
		attempt(5, 10)
		
		function attempt(remaining, duration) {
			runTests(duration, function check(ok) {
				if (ok) {
					return true
				}
				
				if (remaining > 0) {
					setTimeout(function() {
						attempt(remaining - 1, duration * 2)
					}, 0)
					return false
				}
				
				return assert(false)
			})			
		}

		function runTests(duration, check) {
			var expiration = new Date().getTime() + duration
			store.set('foo', 'bar', expiration)			
			if (!check(store.get('foo') == 'bar')) { return }
			
			setTimeout(function() {
				if (!check(new Date().getTime() > expiration)) { return }
				if (!check(store.get('foo') == undefined)) { return }
				
				store.set('foo', 'bar')
				setTimeout(function() {
					if (!check(store.get('foo') == 'bar')) { return }
					
					done()
				}, 5)
			}, duration)
		}
	})
	
	test('remove expired keys', function() {
		var key = 'expired'
		store.set(key, 'bar', new Date().getTime() - 1000)
		assert(store.getExpiration(key) > 0)
		store.removeExpiredKeys()
		assert(!store.getExpiration(key))
	})
}
