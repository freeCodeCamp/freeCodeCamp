'use strict'

const benchmark = require('benchmark')
const createError = require('..')

const FastifyError = createError('CODE', 'Not available')

new benchmark.Suite()
  .add('FastifyError toString', function () { new FastifyError().toString() }, { minSamples: 100 })
  .on('cycle', function onCycle (event) { console.log(String(event.target)) })
  .run({ async: false })
