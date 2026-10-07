import { WeakLRUCache } from '../index.js'
import chai from 'chai'
const assert = chai.assert
let cache = new WeakLRUCache()

suite('WeakLRUCache basic tests', function(){
	test('add entries', function(){
		let entry = cache.getValue(2)
		assert.equal(entry, undefined)
		let obj = {}
		cache.setValue(2, obj)
		assert.equal(cache.getValue(2), obj)
		debugger
		if (cache.expirer.clean)
			cache.expirer.clean()
		assert.equal(cache.getValue(2), obj)
	})
})