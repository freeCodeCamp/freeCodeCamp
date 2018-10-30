var test = require('tape')
var unique = require('array-unique')
var random = require('./')

test('it works', function (assert) {
  var number, l = 1000, cache = []

  for (var i = 0; i < l; i++) {
    number = random()
    if (number <= 0) {
      assert.fail('a random number was less than or equal to zero')
      assert.end()
      return
    }
    if (number >= 1) {
      assert.fail('a random number was greater than or equal to one')
      assert.end()
      return
    }
    cache.push(number)
  }

  assert.pass('all ' + l + ' random numbers were greater than zero and less than one')
  assert.equal(cache.length, unique(cache).length, 'all ' + l + ' random numbers were unique')
  assert.end()
})
