var test = require('tape')
var ista = require('./')

test('strict', function(t) {
  t.ok(ista.strict(new Int8Array), 'Int8Array')
  t.ok(ista.strict(new Int16Array), 'Int16Array')
  t.ok(ista.strict(new Int32Array), 'Int32Array')
  t.ok(ista.strict(new Uint8Array), 'Uint8Array')
  t.ok(ista.strict(new Uint16Array), 'Uint16Array')
  t.ok(ista.strict(new Uint32Array), 'Uint32Array')
  t.ok(ista.strict(new Float32Array), 'Float32Array')
  t.ok(ista.strict(new Float64Array), 'Float64Array')

  t.ok(!ista.strict(new Array), 'Array')
  t.ok(!ista.strict([]), '[]')

  t.end()
})

test('loose', function(t) {
  t.ok(ista.loose(new Int8Array), 'Int8Array')
  t.ok(ista.loose(new Int16Array), 'Int16Array')
  t.ok(ista.loose(new Int32Array), 'Int32Array')
  t.ok(ista.loose(new Uint8Array), 'Uint8Array')
  t.ok(ista.loose(new Uint16Array), 'Uint16Array')
  t.ok(ista.loose(new Uint32Array), 'Uint32Array')
  t.ok(ista.loose(new Float32Array), 'Float32Array')
  t.ok(ista.loose(new Float64Array), 'Float64Array')

  t.ok(!ista.loose(new Array), 'Array')
  t.ok(!ista.loose([]), '[]')

  t.end()
})
