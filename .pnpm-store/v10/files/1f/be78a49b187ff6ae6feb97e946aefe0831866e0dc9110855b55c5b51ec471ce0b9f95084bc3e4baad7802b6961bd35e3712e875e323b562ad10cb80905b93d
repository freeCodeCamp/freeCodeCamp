'use strict'

const Benchmark = require('benchmark')
const sjson = require('..')

const internals = {
  text: '{ "a": 5, "b": 6, "c": { "d": 0, "e": "text", "f": { "g": 2 } } }',
  proto: '{ "a": 5, "b": 6, "__proto__": { "x": 7 }, "c": { "d": 0, "e": "text", "__proto__": { "y": 8 }, "f": { "g": 2 } } }'
}

const suite = new Benchmark.Suite()

suite
  .add('JSON.parse', () => {
    JSON.parse(internals.text)
  })
  .add('JSON.parse proto', () => {
    JSON.parse(internals.proto)
  })
  .add('secure-json-parse parse', () => {
    sjson.parse(internals.text)
  })
  .add('secure-json-parse parse proto', () => {
    sjson.parse(internals.text, { constructorAction: 'ignore', protoAction: 'ignore' })
  })
  .add('secure-json-parse safeParse', () => {
    sjson.safeParse(internals.text)
  })
  .add('secure-json-parse safeParse proto', () => {
    sjson.safeParse(internals.proto)
  })
  .add('JSON.parse reviver', () => {
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
  if (key === '__proto__') {
    return undefined
  }

  return value
}
