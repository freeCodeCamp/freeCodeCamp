
var assert = require('assert')
var none = require('..')

/**
 * Tests.
 */

describe('to-no-case', function () {

  describe('space', function () {
    it('shouldnt touch space case', function () {
      assert.equal(none('this is a string'), 'this is a string')
    })
  })

  describe('camel', function () {
    it('should remove camel case', function () {
      assert.equal(none('thisIsAString'), 'this is a string')
    })
  })

  describe('constant', function () {
    it('should remove constant case', function () {
      assert.equal(none('THIS_IS_A_STRING'), 'this is a string')
    })
  })

  describe('upper', function () {
    it('should not split upper case', function () {
      assert.equal(none('UPPERCASE'), 'uppercase')
    })
  })

  describe('lower', function () {
    it('should not split lower case', function () {
      assert.equal(none('lowercase'), 'lowercase')
    })
  })

  describe('pascal', function () {
    it('should remove pascal case', function () {
      assert.equal(none('ThisIsAString'), 'this is a string')
    })

    it('should handle single letter first words', function () {
      assert.equal(none('AStringIsThis'), 'a string is this')
    })

    it('should handle single letter first words with two words', function () {
      assert.equal(none('AString'), 'a string')
    })
  })

  describe('slug', function () {
    it('should remove slug case', function () {
      assert.equal(none('this-is-a-string'), 'this is a string')
    })
  })

  describe('snake', function () {
    it('should remove snake case', function () {
      assert.equal(none('this_is_a_string'), 'this is a string')
    })
  })

  describe('sentence', function () {
    it('should remove sentence case', function () {
      assert.equal(none('This is a string.'), 'this is a string.')
    })
  })

  describe('title', function () {
    it('should remove title case', function () {
      assert.equal(none('This: Is a String'), 'this: is a string')
    })
  })

  describe('junk', function () {
    it('should remove casing but preserve characters', function () {
      assert.equal(none('rAnDom -junk$__loL!'), 'random -junk$__lol!')
    })

    it('should remove casing but preserve characters even without white space', function () {
      assert.equal(none('$50,000,000'), '$50,000,000')
    })
  })

  describe('non-latin characters', function () {
    it('should return identical string', function () {
      assert.equal(none('ارژنگ'), 'ارژنگ')
    })
  })

})
