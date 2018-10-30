var cc =require('../lib/utils')
var INI = require('ini')
var assert = require('assert')

function test(obj) {

  var _json, _ini
  var json = cc.parse (_json = JSON.stringify(obj))
  var ini = cc.parse (_ini = INI.stringify(obj))
  console.log(_ini, _json)
  assert.deepEqual(json, ini)
}


test({hello: true})

