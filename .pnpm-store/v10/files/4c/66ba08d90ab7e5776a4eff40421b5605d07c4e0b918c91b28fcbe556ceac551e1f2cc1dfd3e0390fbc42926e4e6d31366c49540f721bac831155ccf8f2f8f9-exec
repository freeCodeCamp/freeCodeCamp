'use strict'

const Benchmark = require('benchmark')
const sjson = require('..')

const internals = {
  text: '{ "a": 5, "b": 6, "proto": { "x": 7 }, "c": { "d": 0, "e": "text", "\\u005f\\u005fproto": { "y": 8 }, "f": { "g": 2 } } }',
  suspectRx: /"(?:_|\\u005f)(?:_|\\u005f)(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006f)(?:t|\\u0074)(?:o|\\u006f)(?:_|\\u005f)(?:_|\\u005f)"/
}

const suite = new Benchmark.Suite()

suite
  .add('JSON.parse', () => {
    JSON.parse(internals.text)
  })
  .add('secure-json-parse parse', () => {
    sjson.parse(internals.text)
  })
  .add('secure-json-parse safeParse', () => {
    sjson.safeParse(internals.text)
  })
  .add('reviver', () => {
    JSON.parse(internals.text, internals.reviver)
  })
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })

internals.reviver = function (key, value) {
  if (key.match(internals.suspectRx)) {
    return undefined
  }

  return value
}
