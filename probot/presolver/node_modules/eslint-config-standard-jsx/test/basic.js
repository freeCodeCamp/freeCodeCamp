var config = require('../')
var test = require('tape')

test('test basic properties of config', function (t) {
  t.ok(isObject(config.parserOptions))
  t.ok(isObject(config.rules))
  t.ok(Array.isArray(config.plugins))
  t.end()
})

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}
