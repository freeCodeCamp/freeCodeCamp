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
  name: 'create',
  minSamples: 100,
  fn: 'const token = tokens.create(secret)'
})

suite.on('start', function onCycle () {
  process.stdout.write('  create\n\n')
})

suite.on('cycle', function onCycle (event) {
  benchmarks.add(event.target)
})

suite.on('complete', function onComplete () {
  benchmarks.log()
})

suite.run({ async: false })
