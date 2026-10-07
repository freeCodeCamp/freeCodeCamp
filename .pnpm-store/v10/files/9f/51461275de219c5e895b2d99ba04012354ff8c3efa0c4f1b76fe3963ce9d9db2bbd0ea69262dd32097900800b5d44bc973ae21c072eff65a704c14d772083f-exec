'use strict'

const Benchmark = require('benchmark')
const sjson = require('..')

const internals = {
  text: '{ "a": 5, "b": 6, "__proto__": { "x": 7 }, "c": { "d": 0, "e": "text", "__proto__": { "y": 8 }, "f": { "g": 2 } } }',
  invalid: '{ "a": 5, "b": 6, "__proto__": { "x": 7 }, "c": { "d": 0, "e": "text", "__proto__": { "y": 8 }, "f": { "g": 2 } } } }'
}

const suite = new Benchmark.Suite()

suite
  .add('JSON.parse valid', () => {
    JSON.parse(internals.text)
  })
  .add('JSON.parse error', () => {
    try {
      JSON.parse(internals.invalid)
    } catch { }
  })
  .add('secure-json-parse parse', () => {
    try {
      sjson.parse(internals.invalid)
    } catch { }
  })
  .add('secure-json-parse safeParse', () => {
    sjson.safeParse(internals.invalid)
  })
  .add('reviver', () => {
    try {
      JSON.parse(internals.invalid, internals.reviver)
    } catch { }
  })
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })

internals.reviver = function (key, value) {
  if (key === '__proto__') {
    throw new Error('kaboom')
  }

  return value
}
