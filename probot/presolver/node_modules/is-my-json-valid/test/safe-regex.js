var tape = require('tape')
var safeRegex = require('safe-regex')

var formats = require('../formats')

tape('safe-regex', function (t) {
  var key
  for (key in formats) {
    if (formats[key] instanceof RegExp) {
      t.ok(safeRegex(formats[key]), key + ' should be a safe regex')
    }
  }

  t.end()
})
