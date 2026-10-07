'use strict'

/**
 * Module dependencies.
 */

const benchmark = require('benchmark')
const benchmarks = require('beautify-benchmark')
const Tokens = require('..')

/**
 * Globals for benchmark.js
 */

global.tokens = new Tokens()
global.secret = global.tokens.secretSync()

const suite = new benchmark.Suite()

suite.add({
  name: 'verify - valid',
  minSamples: 100,
  setup: 'token = tokens.create(secret)',
  fn: 'const valid = tokens.verify(secret, token)'
})

suite.add({
  name: 'verify - invalid',
  minSamples: 100,
  setup: 'token = tokens.create(secret).replace(/[a-zA-Z]/g, "=")',
  fn: 'const valid = tokens.verify(secret, token)'
})

suite.on('start', function onCycle () {
  process.stdout.write('  verify\n\n')
})

suite.on('cycle', function onCycle (event) {
  benchmarks.add(event.target)
})

suite.on('complete', function onComplete () {
  benchmarks.log()
})

suite.run({ async: false })
