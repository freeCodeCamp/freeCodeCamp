var tape = require('tape')
var fs = require('fs')
var validator = require('../')

var files = fs.readdirSync(__dirname+'/json-schema-draft4')
  .map(function(file) {
    if (file === 'definitions.json') return null
    if (file === 'refRemote.json') return null
    return require('./json-schema-draft4/'+file)
  })
  .filter(Boolean)

files.forEach(function(file) {
  file.forEach(function(f) {
    tape('json-schema-test-suite '+f.description, function(t) {
      var validate = validator(f.schema)
      f.tests.forEach(function(test) {
        t.same(validate(test.data), test.valid, test.description)
      })
      t.end()
    })
  })
})
