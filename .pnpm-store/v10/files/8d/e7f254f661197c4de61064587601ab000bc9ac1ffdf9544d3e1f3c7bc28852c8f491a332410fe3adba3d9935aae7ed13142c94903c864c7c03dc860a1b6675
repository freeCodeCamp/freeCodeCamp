/* eslint-env mocha */

var assert = require('assert')
var appendField = require('../')
var testData = require('testdata-w3c-json-form')

describe('Append Field', function () {
  for (var test of testData) {
    it('handles ' + test.name, function () {
      var store = Object.create(null)

      for (var field of test.fields) {
        appendField(store, field.key, field.value)
      }

      assert.deepEqual(store, test.expected)
    })
  }
})
