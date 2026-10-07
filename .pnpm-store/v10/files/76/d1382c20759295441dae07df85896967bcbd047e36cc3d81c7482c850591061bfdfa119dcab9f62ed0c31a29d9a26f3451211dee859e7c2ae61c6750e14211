
var assert = require('assert')
var space = require('..')

/**
 * Cases.
 */

var strings = {
  camel: 'thisIsAString',
  constant: 'THIS_IS_A_STRING',
  dot: 'this.is.a.string',
  pascal: 'ThisIsAString',
  sentence: 'This is a string.',
  snake: 'this_is_a_string',
  space: 'this is a string',
  title: 'This Is a String',
  junk: '-this__is$%a-string...'
}

/**
 * Tests.
 */

describe('to-space-case', function () {
  for (var key in strings) test(key)
})

/**
 * Create a test for a given case `key`.
 *
 * @param {String} key
 */

function test(key) {
  it('should convert ' + key + ' case', function () {
    assert.equal(space(strings[key]), 'this is a string')
  })
}
